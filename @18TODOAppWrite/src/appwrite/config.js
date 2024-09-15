import { Client, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint(String(import.meta.env.VITE_ENDPOINT))
    .setProject(String(import.meta.env.VITE_PROJECT_ID));
    

    const databases = new Databases(client);
   // const tasks =  new Tasks(this.client);

    export { client, databases };
