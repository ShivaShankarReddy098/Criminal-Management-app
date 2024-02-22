
const getHomePage = async (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect("/home.html"); 
  };
  module.exports = getHomePage;