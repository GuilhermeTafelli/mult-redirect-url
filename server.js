const express = require('express')
const mongoose = require('mongoose');
const requireDir = require('require-dir')

const app = express();

mongoose.connect('mongodb+srv://admin:copa2020@cluster-1.i6ej5.gcp.mongodb.net/mult-redirect-url?retryWrites=true&w=majority',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

requireDir("./src/models");

const Counter = mongoose.model('Counter')

app.get("/keila-neves", async (req, res) => {

    const countOld = await Counter.findOne();

    await Counter.findByIdAndUpdate(countOld.id, {count: countOld.count+1});

    const urlList = [
        "https://api.whatsapp.com/send?phone=5511992313878",
        "https://api.whatsapp.com/send?phone=5547991892678",
        "https://api.whatsapp.com/send?phone=5541999494223",
        "https://api.whatsapp.com/send?phone=5547999515142",
        "https://api.whatsapp.com/send?phone=5511989548529",
        "https://api.whatsapp.com/send?phone=5547999202315",
        "https://api.whatsapp.com/send?phone=5511989548529",
        "https://api.whatsapp.com/send?phone=5567996740449",
        "https://api.whatsapp.com/send?phone=5511992338844"
    ]

    res.redirect(urlList[countOld.count%9])
});


app.get("/atomic-brand", async (req, res) => {

    const countOld = await Counter.findOne();

    await Counter.findByIdAndUpdate(countOld.id, {count: countOld.count+1});

    const urlList = [
        "https://api.whatsapp.com/send?phone=5547999515142",
        "https://api.whatsapp.com/send?phone=5541999494223",
        "https://api.whatsapp.com/send?phone=5547918926789"
    ]

    res.redirect(urlList[countOld.count%3])
});

app.listen(process.env.PORT || 8080);
