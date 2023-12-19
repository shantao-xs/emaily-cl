const key =require('../config/keys');
const stripe = require('stripe')(key.stripeSecretKey);
const requireLogin =require('../middlewares/requireLogin');


module.exports=(app)=>{
    
    
    app.post('/api/stripe', requireLogin,async (req,res)=>{
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'recharge for your account',
            source:req.body.id
        });
        
        req.user.credits+=5;
        const user = await req.user.save();
    });
};
