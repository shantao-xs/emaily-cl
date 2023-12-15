
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const keys=require('../config/keys.js');
const mongoose = require('mongoose');

const User = mongoose.model('users'); 




passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback',  
    proxy:true
    },


    async (accessToken, refreshToken,profile,done)=>{

        const existingUser = await User.findOne({googleId: profile.id});
        if(existingUser){
            done(null,existingUser);
        }else{
            const newUser = await User({googleId: profile.id}).save();//.save(): mongoDB的method
            done(null,newUser);
        }
    }));
    


passport.serializeUser((user,done)=>{
    done(null,user.id);
});



     passport.deserializeUser(
        async (id,done)=>{
            const user = await User.findById(id);
            done(null,user);//这个user就是user model
     });



    