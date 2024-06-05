import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    // endpoint: 'http://localhost/v1',
    platform: 'com.jsm.unibearapp',
    projectId: '6649592f000294a61740',
    databaseId:'6657d0ca002efeb6fda9',
    userCollectionId: '6657d148000a15c5d320',
    videoCollectionId:'6657d1d70007668a74a5',
    storageId:'6657d9da00323280960a',
}



// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);


export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);

    });
    
}




