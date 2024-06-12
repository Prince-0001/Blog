import conf from "../config/Conf";
import { Client,Account,Id } from "appwrite";

export class AuthService{

    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client)
    }

    async createAccount({email,password,name}){
        try{
           const userAccount= await this.account.create(Id.unique(),email,password,name)
           if(userAccount) {
            //call another method
            //hm login hi kra degai
            return this.login({email,password})
           }
           else {
            return userAccount;
           }
        }
        catch(error){
            console.log("error in creating account")
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
            throw error
        }
    }


}

const authService= new AuthService();

export default authService;