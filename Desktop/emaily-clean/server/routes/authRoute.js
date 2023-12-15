
const passport = require('passport');


module.exports=(app)=>{
    app.get('/', (req, res) => {
        res.send('Hello, World!'); 
      });


 
    app.get('/auth/google', 
        passport.authenticate('google',{ 
            scope:['profile','email']  
        })
    );
    /**错误：Cannot GET /auth/google/callback */

    
    app.get('/auth/google/callback', 
        passport.authenticate('google'),/**中间件：验证google返回的用户信息，添加入req.user中*/
        (req,res)=>{
            res.redirect('/surveys');
        }
    ); 

    
    app.get('/api/current_user',(req,res)=>{ 
        res.send(req.user);
    });

    
    
    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/'); 
    });

}
