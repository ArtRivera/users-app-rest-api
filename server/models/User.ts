import {Schema,SchemaDefinitionProperty,model, SchemaDefinition} from 'mongoose';

const nombre: SchemaDefinitionProperty = {
    type: String,
    required: true,
    trim: true
}

const email: SchemaDefinitionProperty ={
    type: String,
    required: true,
    trim: true
}

const img: SchemaDefinitionProperty ={
    type: String,
    trim: true,
    default: 'http://simpleicon.com/wp-content/uploads/user1.png'
}

const validarGenero = (gender:string) =>{
    const genders = ['Hombre','Mujer'];
    return genders.includes(gender);
}
const genero: SchemaDefinitionProperty = {
    type: String,
    validate: [validarGenero, '{PATH} no existe ese genero']
}


const validateCelular = (cel: string) =>{
    return cel.length <= 10;
 }
const celular: SchemaDefinitionProperty = {
    type: String,
    validate: [validateCelular,'{PATH} excede de 10 digitos']
}




const userSchema = new Schema({
    nombre,
    email,
    genero,
    img,
    celular
})


export default model('User',userSchema);