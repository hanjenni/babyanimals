const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();
const { v4: uuidv4 } = require("uuid"); 
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
    create,
    index,
  };

  function create(req, res) {
    console.log(req.body, req.file, req.user); 
    const key = `babyanimals/posts/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

    s3.upload(params, async function (err, data) {
        console.log(err, 'err from aws');
        if (err) return res.status(400).json({err:'check terminal error with AWS'});
        try {
            const post = await Post.create({
                caption: req.body.caption,
                user: req.user,
                photoUrl: data.Location
            });
            res.status(201).json({data: post});
        }catch (err) {
            res.status(400).json({err});
        }
    });
  }

  async function index(req, res) {
    try {
        const posts = await Post.find({}).populate('user').exec();
        res.status(200).json({data: posts});
    }catch(err) {
        res.status(400).json({err});
    }
  }

  