const { Model, DataTypes } = require('sequelize');

class Dream extends Model{
    static init(connection){
        super.init({
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            url: DataTypes.STRING,
        },
        {
            tableName: 'dreams',
            sequelize: connection,
            
        })
    }
}

module.exports = Dream;