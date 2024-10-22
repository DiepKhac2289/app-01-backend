
const { name } = require('ejs');
const connection = require('../config/dbConfiguration');
const bcrypt = require('bcrypt');

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

const createUser = async(req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let address = req.body.address;
    let city = req.body.city;

    try{
        const saltRound = 10;
        const hashedEmail = await bcrypt.hash(email, saltRound);

        connection.query(
            `INSERT INTO 
            Users (name , email , address , city)
            VALUES (?,?,?,?)`,
            [username, hashedEmail, address, city],
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
    }catch(error){
        console.error('Error hashing password:', error);
    }
}

const getSignIn = (req, res) => {
    return res.render('sign-in.ejs');
}

const getSignInAuthentication = async(req, res) => {
    let username = req.body.username;
    let email = req.body.email;

    try{
        const saltRound = 10;
        const hashedEmail = await bcrypt.hash(email, saltRound);
        const query = 'SELECT * FROM Users WHERE id = ? AND email = ?';
        connection.query(query, [username, email] , function(err, result){
                if(err){
                    console.error('Error inserting data:', err);
                    return res.status(500).send('Server error');
                }else{
                    bcrypt.compare(email, hashedEmail, (err, isMatch) =>{
                        if(err){
                            console.log('ERR!!!!');
                            return;
                        }
                        if(isMatch){
                            console.log('Mật khẩu khớp, người dùng có thể đăng nhập.');
                        }else{
                            console.log('Mật khẩu không khớp.');
                        }
                    });
                }
                
            }
        );
    }catch(error){
        console.error('Error hashing password:', error);
    }

}


module.exports = {
    getHomePage,
    getAboutPage,
    getServicePage,
    getBlogPage,
    getLoginPage,
    createUser,
    getSignIn,
    getSignInAuthentication
};
