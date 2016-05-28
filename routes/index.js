/**
 * Created by rohman on 5/28/16.
 */
var EmployeesSql = require('../models/mysql');
var EmployeesNosql = require('../models/employees');

exports.employees = function(req, res){
  EmployeesSql.query("select * from employees", function(e, em){
    if(e) throw e;
    else{
      EmployeesNosql.find(function(er, emp){
        if(er) throw er;
        else res.render('index', {emplosql : em, emploNosql : emp});
      });
    }
  })
};

exports.save_to_MongoDB = function(req, res){
  console.log(req.body.nip);
 // for(var r =0; r < nip.count; r++){
    EmployeesSql.query("select * from employees where nip= ? ",[req.body.nip], function(e, dtem){
      var convert_toJSON = JSON.stringify(dtem);
      var employ = JSON.parse(convert_toJSON);
      console.log(employ);
      for(var ar = 0; ar < employ.length; ar++){
        new EmployeesNosql(employ[ar]).save(function(er){
          if(er) throw e;
        });
      }
    });
  //}
  res.redirect('/');
};

exports.delete = function(req, res){
  EmployeesNosql.remove({_id : req.params._id}, function(e){
    if(e) throw e;
    else
      res.redirect('/');
  })
};