// Dependencies
// =============================================================
var path = require("path");



// Routes
// =============================================================
module.exports = function(app, passport) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/travel", function(req, res) {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
  
    });
      
    app.post('/signup', passport.authenticate('local-signup', {
      
      successRedirect: '/',
  
      failureRedirect: '/'
      
    }));
  
  
    // portfolio route loads portfolio.html
    app.get("/travel", isLoggedIn, function(req, res) { // need to change portfolio
      console.log(JSON.stringify(req.user))
      res.sendFile(path.join(__dirname, "../client/build/index.html")); // need to change to index.html
    });
  
    // research route loads research.html
    // app.get("/research", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../client/build/index.html")); // need to change to index.html
    // });
  
    app.get('/logout', function(req,res) {
      
      
      req.session.destroy(function(err) {
      
        res.redirect('/');
  
      });
    });
  
    
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/travel',
        failureRedirect: '/'
  
    }));

  
  
    function isLoggedIn(req, res, next) {
   
      console.log(req.body);
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  
      console.log(res.body);
      if (req.isAuthenticated())
       
  
          return next();
           
      res.redirect('/signin');
      
    }
  
  
  };
  
  
  // USE APP.USE FOR HOME