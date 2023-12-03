const checkoutModel = require('../models/checkout')
const {response} = require('../helpers/common')
const { sendGmail } = require('../helpers/mailer')

exports.insertCheckout = async(req, res) => {
    const { name, email, phone, address, city, zip_code, country, shipping, product, price } = req.body
    const data = { name, email, phone, address, city, zip_code, country, shipping, product, price };
    try {
        let result = await checkoutModel.insert(data)
        console.log('masuk db');
        if(result){
            // await sendGmail(data.email, data.product)
            await sendGmail( data.name, data.email, data.phone, data.address, data.city, data.zip_code, data.country, data.shipping, data.product, data.price )
            return res.send({status: 200, message: 'success check email'})
        }
        response(res, data, 'success', 200, 'insert data checkout success')
    } catch (error) {
        console.log(error);
        response(res, null, 'failed', 400, 'insert data checkout failed')  
    }
}

exports.getCheckout = async(req,res) => {
    try {
        const {rows} = await checkoutModel.get();
        response(res, rows, 'success', 200, 'Get data checkout success')
    } catch (error) {
        console.log(error);
        response(res, null, 'failed', 400, 'Get data checkout failed')  
    }
}

exports.getCheckoutById = async(req,res) => {
    try {
        const id = req.params.id;
        const {rows} = await checkoutModel.getById(id);
        response(res, rows, 'success', 200, 'Get data checkout by Id success')
    } catch (error) {
        response(res, null, 'failed', 400, 'Get data checkout failed')  
    }
}