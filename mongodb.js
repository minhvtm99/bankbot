  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://minhvtm201099:alexisozil99@ds117691.mlab.com:17691/bankbotdev";

  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db)  {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });