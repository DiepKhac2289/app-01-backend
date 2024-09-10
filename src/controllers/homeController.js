
const { name } = require('ejs');
const connection = require('../config/dbConfiguration');
// Homepage
const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

// AboutPage
const getAboutPage = (req, res) => {
    return res.render('about.ejs');
};

// ServicePage
const getServicePage = (req, res) => {
    return res.render('services.ejs');
};

// BlogPage
const getBlogPage = (req, res) => {
    return res.render('blog.ejs');
};

// ContactUsPage
const getLoginPage = (req, res) => {
    return res.render('login.ejs');
};

const createUser = (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let address = req.body.address;
    let city = req.body.city;

    connection.query(
        `INSERT INTO 
        Users (name , email , address , city )
        VALUES (?,?,?,?)`,
        [username, email, address, city],
        function(err, result){
            if(err){
                console.error('Error inserting data:', err);
                return res.status(500).send('Server error');
            }else{
                // Gửi nội dung HTML với thông báo và script chuyển hướng
                res.send(`
                  <h3>User created successfully!</h3>
                  <script>
                    setTimeout(function() {
                      window.location.href = '/login';
                    }, 2000);
                  </script>
                `);
              }
            
        }
    );
}

const getSignIn = (req, res) => {
    return res.render('sign-in.ejs');
}



module.exports = {
    getHomePage,
    getAboutPage,
    getServicePage,
    getBlogPage,
    getLoginPage,
    createUser,
    getSignIn
};
