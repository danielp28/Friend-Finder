var friendsData = require("../data/friends");


module.exports = function(app) {
   
        app.get("/api/friends", function (req, res) {
            return res.json(friendsData);
        });
    

    
        app.post("/api/friends", function (req, res) {

            var newEntry = req.body;

            friendsData.push(newEntry);

            res.json(newEntry);
        });
    
}