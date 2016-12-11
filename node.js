var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use('/asserts',express.static('asserts'));


 app.get('/',function(req,res){                      // Get HTTP methos
  res.render('index');
 });

                                  // POST HTTP method
app.post('/',urlencodedParser,function(req,res,next){
  var transporter = nodemailer.createTransport({                // transporter
        service: 'Gmail',
        auth: {
            user: 'sreenathchandrae12@gmail.com', // Your email id
            pass: 'Cv9440506045' // Your password
        }
    });
       var text = "Hi welcome to Gregs Auto sale";
       var emailone = [req.body.email,'sreenathchandrae12@gmail.com'];          // Message text and Recipents
      var mailOptions = {
      from:'Sreenath Chandra<sreenathchandrae12@gmail.com>',                    // Sender and Reciver Deatils
      to:emailone,
      subject:'Welcome',
      text:text,
      };
     transporter.sendMail(mailOptions, function(error, info){
  //  if(error){
    //    console.log(error);
    //  return  res.redirect('/');
  //  }
    //else{
      //  console.log('Message sent: ' + info.response);                       // condiotn loop
    //  return  res.redirect('/sree');
    //};
});

   res.render('success',{data:req.body});
                           // single page application
});
app.listen(process.env.PORT || 1100,function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);         // port
});
