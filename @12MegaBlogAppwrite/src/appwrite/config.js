import conf from  "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket =  new Storage(this.client);
    }

    async createPost(title, slug, Content, featuredImage, status, userId) {
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,               
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    Content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }
        catch(error) {
            console.log("Appwrite Serv :: createPost :: error", error);
        }
    }
    async updatePost(slug, title, Content, featuredImage, status) {
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,               
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    Content,
                    featuredImage,
                    status,
                }
            )
        }
        catch(error) {
            console.log("Appwrite Serv :: updatePost :: error", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,               
                conf.appwriteCollectionId,
                slug,
               )
               return true;
        }
        catch(error) {
            console.log("Appwrite Serv :: updatePost :: error", error);
            return true;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument( 
                conf.appwriteDatabaseId,               
                conf.appwriteCollectionId,
                slug)
            
        } catch (error) {
            console.log("Appwrite seri :: getPost :: error",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")])
     {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,               
                conf.appwriteCollectionId,
                queries,
            )
        }
        catch (error) {
            console.log("Appwrite seri :: getPosts :: error",error);
            return false
        }
    }
    // file upload
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        }
        catch (error) {
            console.log("Appwrite seri :: uploadFile :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {

            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }
        catch (error) {
            console.log("Appwrite seri :: uploadFile :: error",error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,fileId
        )
    }
}




const service = new Service()
export default service