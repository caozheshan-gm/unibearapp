import {Databases, Account, Avatars, Client, ID } from 'react-native-appwrite';

// export const appwriteConfig = {
//     endpoint: 'https://cloud.appwrite.io/v1',
//     platform: 'com.jsm.unibearapp',
//     projectId: '6649592f000294a61740',
//     databaseId:'6657d0ca002efeb6fda9',
//     userCollectionId: '6657d148000a15c5d320',
//     videoCollectionId:'6657d1d70007668a74a5',
//     storageId:'6657d9da00323280960a',
// }

export const appwriteConfig = {
    endpoint: 'http://localhost/v1',
    platform: 'com.jsm.unibearapp',
    projectId: '66aa0443002c299d2504',
    databaseId:'66aa06640039a2140f31',
    userCollectionId: '66aa06a000183369ea79',
    videoCollectionId:'66aa06ab0010c2771bff',
    storageId:'66aa0916000e98679ea0',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client); 
const databases = new Databases(client);


export async function createUser(email,password,username) {
    // Register User
    
    try {
    
        const newAccount = await account.create(
            userId = ID.unique(),
            email = email, 
            password = password, 
            name = username,

        );


        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email,password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    
}

export async function signIn(email,password) {

    



    try{
       
        // await account.deleteSession('current');
        const session = await account.createEmailPasswordSession(email, password);
        
       
        return session;
       

    } catch (error) {
        console.log(error);

        throw new Error(error);
    }
}




