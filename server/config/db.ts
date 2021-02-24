import mongoose,{ConnectOptions} from 'mongoose';
import config from './index'

const mongooseOpts: ConnectOptions = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true
}

mongoose.connect(`${config.MONGO_HOST}/${config.MONGO_DB}`,mongooseOpts)
.then(db =>{
    console.log('DB Conectada a', db.connection.name);
})
.catch(e => {
    console.log(`${config.MONGO_HOST}/${config.MONGO_DB}`);
    console.error(e)
});