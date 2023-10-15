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

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.createAccount(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another method
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Error :: getCurrentUser :: " + error);
    }
    return null;
  }

  async logout() {
    try {
      return this.account.deleteSessions("current");
    } catch (error) {
      console.log("Error :: logout :: " + error);
    }
    return null;
  }
}

const authService = new AuthService();
export default authService;
