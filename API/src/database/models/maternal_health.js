module.exports = (Sequelize, DataType) => {
    const maternal_health = Sequelize.define ('maternal_health',{
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
        tableName: 'dataset'
    });
    return maternal_health;
}