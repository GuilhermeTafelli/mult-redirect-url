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

app.get("/", async (req, res) => {

    const countOld = await Counter.findOne();

    await Counter.findByIdAndUpdate(countOld.id, {count: countOld.count+1});

    const urlList = [
        "https://api.whatsapp.com/send?phone=5511977890913&text=ol%C3%A1!%20vim%20do%20an%C3%BAncio%20gostaria%20de%20receber%20o%20cat%C3%A1logo%20com%20as%20pe%C3%A7as",
        "https://api.whatsapp.com/send?phone=5511964201683&text=ol%C3%A1!%20vim%20do%20an%C3%BAncio%20gostaria%20de%20receber%20o%20cat%C3%A1logo%20com%20as%20pe%C3%A7as",
        "https://api.whatsapp.com/send?phone=5511964321041&text=ol%C3%A1!%20vim%20do%20an%C3%BAncio%20gostaria%20de%20receber%20o%20cat%C3%A1logo%20com%20as%20pe%C3%A7as",
        "https://api.whatsapp.com/send?phone=5511959652716&text=ol%C3%A1!%20vim%20do%20an%C3%BAncio%20gostaria%20de%20receber%20o%20cat%C3%A1logo%20com%20as%20pe%C3%A7as",
        "https://api.whatsapp.com/send?phone=5511949407181&text=ol%C3%A1!%20vim%20do%20an%C3%BAncio%20gostaria%20de%20receber%20o%20cat%C3%A1logo%20com%20as%20pe%C3%A7as"

    ]

    res.redirect(urlList[countOld.count%4])
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