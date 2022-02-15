import {Sequelize} from 'sequelize';

const db= new Sequelize('contact_address','sqluser','password',{
   host:"localhost",
   dialect:"mysql" 
});

export default db;