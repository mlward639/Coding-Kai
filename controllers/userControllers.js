const db = require ("../server/models"); 

// holds functions 
module.exports = 
{
    // creates user (REMEMBER NAME)
   createUser: function(req, res)
   {
       db.User 
       .create(req.body)
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(400).json(err)); 
   },
   // update 
   update: function(req, res)
   {
       db.User 
       .findOneAndUpdate({username: req.body.username}, req.body)
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(400).json(err)); 
   },
   // login 
   login: function(req, res)
   {
       db.User 
        .findOne({username: req.body.username})
        .then(dbModel =>{
            console.log("Login route: ", dbModel); 
            req.session.save(() => {
                req.session._id = dbModel._id;
                req.session.username = dbModel.username; 
                req.session.logged_in = true;
                res.json({ message: 'You are now logged in!' });
            });
            //res.json(dbModel); 
        })
            .catch(err => res.status(422).json(err)); 
        
   }, 
   // delete 
   delete: function(req, res)
   {
       db.User 
       .findOneAndDelete({username: req.body.username}, req.body)
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(400).json(err)); 
   },
   // find user by id 
   findUsers: function(req, res)
   {
       db.User 
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err)); 
   }
};
