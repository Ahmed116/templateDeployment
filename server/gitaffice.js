var db = require("./../database-mysql/index");
exports.getoff = function(req,res){
    const email = req.body.email;
    let sql = "SELECT * FROM officedata WHERE email = ?" ;
    db.connection.query(sql,[email],function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            
            "success":results
              });
              
          }
      });
      
}