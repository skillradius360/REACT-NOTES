import {Client,Account,ID} from  "appwrite"

class AuthService {

    client= new Client()
    account

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
                            .setProject(conf.appwriteProjectId)


        this.account= new Account(this.client)                    
    }


async  Signup({email,username,password}){
        
        if([email,password,username].some((data)=>data.trim()==="")){
            throw new Error("all signup creds not recieved")
        }
        try {
            const isUser= await this.account.create(
                ID.unique(),
                username,
                email,
                password
            )

            if(isUser) this.Login({email,password})

            else return isUser  


        } catch (error) {
            throw new Error(error)
        }
    }

async Login({email,password}){
        try {
            return  session = await account.createEmailPasswordSession(
                email, 
                password
            );

            return session
        } catch (error) {
            console.log(error)
        }
    }


async getCurrentUser(){
       try {
          return await this.account.get()
       } catch (error) {
        console.log(error)
       }

       return null
    }

async Logout(){
    try {
        return  result = await users.deleteSessions(
            (email,password)
        );
    } catch (error) {
        
    }
}

}



const userService= new AuthService()

export default userService


