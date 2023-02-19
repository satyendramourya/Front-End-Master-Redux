// const express = require('express');
import express from 'express';
const app = express();
app.get('/',(req,res)=> {
    console.log("hey from server")
    res.status(200);
    res.json({success: true, data: {id: 1}});
})

// module.exports = app;
export default app;