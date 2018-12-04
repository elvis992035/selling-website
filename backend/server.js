const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = 2000;

// const userRouter = require('/routing/user.js');

const dataRouter = require('./routing/dataRouting');
const userRouter = require('./routing/userRouting.js');

//  middleware

app.use(express.json());
// app.use(cors());

mongoose.connect(

  // 'mongodb+srv://shal1231:Shal1231@cluster0-wlagw.mongodb.net/test?retryWrites=true',

  'mongodb+srv://elvis992035:FLCWKJqJy6BtH8Su@cluster0-wvkpb.mongodb.net/test?retryWrites=true',

    { useNewUrlParser: true }

)
.then(() => {
    console.log('connected to database');
})
.catch(err => {
    console.log('connection failed', err);
});

// to get rid of this error
// (node:66003) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.

mongoose.set('useCreateIndex', true);

// router

app.use('/', userRouter);
app.use('/', dataRouter);


 //  routing it in port 4000

app.listen(path,() => console.log("server is running in port 2000"));

