const {maternal_health} = require('../database/models');


const controller = {
    maternal_health:async (req,res)=>{
        await maternal_health.findAll({
                /* order:[
                    ['Age','DESC']
                ], */
                attributes:['Age', 'SystolicBP','DiastolicBP','BS','BodyTemp','HeartRate','RiskLevel']
                
            }).then(/* users */maternal_health=>{
                let resul={
                    dataset:{
                    cantidad:maternal_health.length},
                    data:maternal_health
                }
                res.send(resul);
            })
        }
        }
module.exports= controller