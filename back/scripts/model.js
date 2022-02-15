import { Sequelize } from "sequelize";
import db from "./config.js";
 
const { DataTypes } = Sequelize;
 
const Book = db.define('book',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    firstname:{
        type: DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING
    },
    company:{
        type: DataTypes.STRING
    },
    telephone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    mobile:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    country:{
        type: DataTypes.STRING
    },
    statename:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default Book;