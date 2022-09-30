const {maternal_health} = require('../database/models');
const {Op} = require ("sequelize");


const controller = {
    maternal_health:async (req,res)=>{
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