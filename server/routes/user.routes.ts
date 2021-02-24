import {Router} from 'express';
import * as controller from './controllers/user.controller';

const router = Router();

router.get('/', controller.test);

router.get('/usuarios',controller.getUsers);

router.get('/usuarios/:id',controller.getUserById);

router.post('/usuarios',controller.createUser);

router.put('/usuarios/:id', controller.updUser);

router.delete('/usuarios/:id', controller.deleteUser);


export default router;