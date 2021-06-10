const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            tableName: 'users',
            sequelize: connection,
            
        })
    }
    static dreams(models){
        this.hasMany(models.Dream, { foreignKey: 'user_id', as: 'dreams'})
    }
}

module.exports = User;