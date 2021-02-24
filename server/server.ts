import app from './app';
import config from './config';
import './config/db'; 

app.listen(config.PORT, ()=>{
    console.log('Escuchando en Puerto: ' + config.PORT);
    
})
