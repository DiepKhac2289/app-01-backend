
// Homepage
const getHomePage = (req, res) => {
    res.send('Hello!, Welcome to HOMEPAGE')
};

// AboutPage
const getAboutPage = (req, res) => {
    res.send('Hello!, Welcome to ABOUT')
};

// ServicePage
const getServicePage = (req, res) => {
    res.send('Hello!, Welcome to SERVICE')
};

// BlogPage
const getBlogPage = (req, res) => {
    res.send('Hello!, Welcome to BLOG')
};

// ContactUsPage
const getContactUsPage = (req, res) => {
    res.send('Hello!, Welcome to CONTACT US')
};

module.exports = {
    getHomePage,
    getAboutPage,
    getServicePage,
    getBlogPage,
    getContactUsPage
};
