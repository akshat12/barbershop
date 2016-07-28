var express = require('express');
var app = express();
var emailJS = require('emailjs/email');
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/',jsonParser);

app.use(express.static(__dirname + '/public'));

app.post('/contact-submit',function(req,res){
	var requestBody = (req.body);
  //TODO: add owner's email address
		sendEmailTo('evb@gmail.com',requestBody.name,requestBody.email,requestBody.message,req,res)
  res.json({formSubmissionSuccess: true});
})


app.listen(PORT, function () {
  console.log('Example app listening on: ' + PORT);
});

//************NODE EMAIL
var api_key = 'key-6accccc1fe683b317768959e0305d751';
//TODO: add custom domain name
var domain = 'barbershop.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

function sendEmailTo (email_id,client_name,client_email,message,req,res){
    var message = {
        from: "East Village Barber Shop <customer@evb.mailgun.org>",
        //TODO: owner email address
        to: 'zenkara.global@gmail.com',
        subject: client_name + " wants a hair cut!",
        text: "Contact them on: " + client_email + " and they have a message : \n" + message
    };

    mailgun.messages().send(message, function (error, body) {
      console.log('error', body);
    });
}
