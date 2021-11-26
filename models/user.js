'use strict';
const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    class User extends Model{}
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A firstname is required'
                },
                notEmpty : {
                    msg: 'Please, provide a firstname'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A lastname is required'
                },
                notEmpty : {
                    msg: 'Please, provide a lastname'
                }
            }
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique : {
                msg: 'The email you entered already exists'
            },
            validate: {
                notNull: {
                    msg: 'A email is required'
                },
                notEmpty : {
                    msg: 'Please, provide a email'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A password is required'
                },
                notEmpty : {
                    msg: 'Please, provide a password'
                },
                len: {
                    args: [8,20],
                    msg: 'The password should be between 8 and 20 characters long.'
                }
            }
        },
    }, {sequelize, modelName: 'User'});

    User.associate = (models) => {
        User.hasMany(models.Course, {
            as: 'Owner',
            foreignKey: {
                fieldName: 'userId',
                allowNull: false
            }
        })
    }
    return User;
}
