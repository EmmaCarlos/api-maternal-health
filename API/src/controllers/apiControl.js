const {heroku_80be73df4011766} = require('../database/models');

const controller = {
    dataset:async (req,res)=>{
        try {
            maternal_health.findAll({
                /* order:[
                    ['Age','DESC']
                ], */
                attributes:['Age', 'SystolicBP','DiastolicBP','BS','BodyTemp','HeartRate','RiskLevel']
                
            }).then(/* users */dataset=>{
                let resul={
                    dataset:{
                    cantidad:dataset.length},
                    data:dataset
                }
                res.send(resul);
            })
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports= controller