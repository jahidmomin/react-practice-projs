import { Client, Storage, Databases, Query, ID } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredimage, status, userId }) {
    try {
      console.log("=================CREATE POST===================");
      console.log({
        title,
        content,
        featuredimage,
        status,
        userId,
      });
      console.log("====================================");

      return await this.databases.createDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(" updatePost :: " + error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(" deletePost :: " + error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("getPost :: " + error);
      return false;
    }
  }

  //query needs index
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDBId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("getPosts :: " + error);
      return false;
    }
  }

  //upload file services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(" uploadFile ::" + error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(" deleteFile ::" + error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      console.log(" Get File Preview ", conf.appwriteBucketId, fileId);
      const url = this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
      console.log("URL", url.href);
      return url.href;
    } catch (error) {
      console.log(" getFilePreview ::" + error);
      return false;
    }
  }
}

const service = new Service();
export default service;
