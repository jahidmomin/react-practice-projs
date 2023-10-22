/* eslint-disable no-useless-catch */
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    console.log(this.client);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      console.log(email, password, name);
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      console.log(userAccount);
      if (userAccount) {
        //call another method
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      console.log("appwrite::login", email, password);
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      console.log("getCurrentUser()", this.account.get());
      return this.account.get();
    } catch (error) {
      console.log("Error :: getCurrentUser :: " + error);
    }
    return null;
  }

  async logout() {
    try {
      console.log("AppWrite :: logout ");
      return this.account.deleteSessions();
    } catch (error) {
      console.log("Error :: logout :: " + error);
    }
    return null;
  }
}

const authService = new AuthService();
export default authService;
