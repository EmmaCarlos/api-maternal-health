module.exports = (Sequelize, DataType) => {
    const heroku_80be73df4011766 = Sequelize.define ('heroku_80be73df4011766',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Age: {
            type:DataType.INTEGER,
            allowNull: false,
        },
        SystolicBP: {
            type: DataType.INTEGER,
            allowNull: false,
            unique: true,
        },
        DiastolicBP: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
        BS: {
            type: DataType.DOUBLE,
            allowNull: false,
        },BodyTemp: {
            type: DataType.INTEGER,
            allowNull: false,
        },HeartRate: {
            type: DataType.INTEGER,
            allowNull: false,
        },RiskLevel: {
            type: DataType.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false,
        tableName: 'heroku_80be73df4011766'
    });
    return heroku_80be73df4011766;
}