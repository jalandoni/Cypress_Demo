///<reference types="cypress" />

import Login from "./Page Object/Login"
import User from "./Page Object/Users"

describe('Applying each and within',()=>{
    var login = new Login()
    var user = new User()


        before('login',()=>{
            login.login()
            
        })

        it('create contact',()=>{
            // user.createUser()
            user.updateUser()
            user.deleteUser()
            user.checkUserStat()
        })
   
})