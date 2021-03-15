const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs"); //encrypt passwords
const db = require("../models");
const config = require('../secrets');

router.use(express.urlencoded({ extended: false })); //scrape email and pass from request header
router.use(express.json());

const jwt = require("jwt-simple"); //used to create a jwt
const passport = require('passport');
require('../config/passAuth'); //import all of passport auth stuff

let requireSignin = passport.authenticate('local', {session: false});
let requireAuth = passport.authenticate('jwt', {session: false});

/**
 * This function return a jwt
 */
const token = (user) => {
    let timestamp = new Date().getTime();  //current time
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

router.get("/", requireAuth, (req, res) => {
  res.send("hello world");
});

/**
 * logging in with credentials
 */
router.post("/signin", requireSignin, (req, res) => {
  //validate user

  //send token
  res.json({token: token(req.user)})
});

/**
 * registering a new user in our database and send back a jwt
 */
router.post("/form", async (req, res) => {
  console.log('form');
  //body-parse to scrape info
  //email, password
  let email = req.body.email;
  let username = req.body.username;
  //encrypt: bcrypt
  let password = bcrypt.hashSync(req.body.password, 8);

  //models- store in database
  try {
    let records = await db.user.findAll({ where: { email: email } });
    if (records.length === 0) {
      //add a new record
      let user = await db.user.create({email: email, password: password, username: username});
      let jwtToken = token(user); //token returns a jwt
      return res.json({token: jwtToken}); //passing a jwt to client
    } else {
      return res.status(422).send({error: 'Email already exists'});
    }
  } catch (error) {
      return res.status(423).send({error: `Can't access database`});
  }
});

router.post("/account/updatepic", async (req, res) => {
  console.log('userprofileupdatepic');
  // console.log(req.body);

  //models- store in database
  try {
    let record = await db.user.update({profile_pic: req.body.pictureUrl, about: req.body.about}, {
      where: { 
        email: req.body.email,
      }
    })
    return res.json(record);
  } catch (error) {
      //send back error, can't access database
      return res.status(423).send({error: `Can't access database1`});
  }
})

router.post("/account", async (req, res) => {
  console.log('account');
  // console.log("reqbody", req.body.email);

  //models- store in database
  try {
    let record = await db.user.findAll( {
      where: { 
        email: req.body.email,
      }
    })
    // console.log(record);
    return res.json(record);
  } catch (error) {
      //send back error, can't access database
      return res.status(423).send({error: `Can't access database1`});
  }
})

router.get("/account/updatepic", async (req, res) => {
  console.log('userprofileGET');
  // console.log(req.body.email);

  try {
    let records = await db.user.findAll(
      {
      where: { 
        email: req.body.email,
      } 
    });
    return res.json(records);

  } catch (error) {
    return res.status(423).send({error: `Can't access database2`});
  }
})

router.post("/chat", async (req, res) => {

  let post = req.body.post;
  let email = req.body.email;
  
  try {
    let forumPost = await db.forum_posts.create({post: post, email: email})

    return res.json(forumPost);

  } catch (error) {
    return res.status(423).send({error: `Can't access database`});
  }
})

router.get("/chat", async (req, res) => {
  try {
    let totalPosts = await db.forum_posts.findAll();
    
    return res.json(totalPosts);

  } catch (error) {
    return res.status(423).send({error: `Can't access database`});
  }
})

router.post("/chat/group", async (req, res) => {
  console.log('chatgroup');

  let post = req.body.post;
  let email = req.body.email;

  try {
    let forumPost = await db.forum_posts.findAll({post: post, email: email})

    return res.json(forumPost);

  } catch (error) {
    return res.status(423).send({error: `Can't access database2`});
  }
})

router.get("/chat/group", async (req, res) => {
  try {
    let totalPosts = await db.forum_posts.findAll();
    
    return res.json(totalPosts);

  } catch (error) {
    return res.status(423).send({error: `Can't access database`});
  }
})

module.exports = router;