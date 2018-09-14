import { Router } from 'express'
import cellphoneController from './cellphoneController'

const cellphoneRouter = Router()

cellphoneRouter.get('/', cellphoneController.getAll)

cellphoneRouter.get('/q/:q', cellphoneController.getByParam)

cellphoneRouter.get('/id/:id', cellphoneController.getById)

cellphoneRouter.post('/', cellphoneController.create)

cellphoneRouter.patch('/id/:id', cellphoneController.edit)

cellphoneRouter.put('/id/:id', cellphoneController.update)

cellphoneRouter.delete('/id/:id', cellphoneController.delete)

export default cellphoneRouter
