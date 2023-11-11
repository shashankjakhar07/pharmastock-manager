import {Router} from 'express'
import * as controls from '../controllers/appControllers.js'

const router=Router()

    

router.route('/sale').post(controls.afterSale)
router.route('/getAllMedicines').get(controls.getData)
router.route('/newOrder').post(controls.newSupply)
router.route('/getNames').get(controls.getNames)
router.route('/getExpiredMed').get(controls.getExpiredMed)
router.route('/getLowStockMed').get(controls.getLowStockMed)

export default router