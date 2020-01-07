const express = require('express')

module.exports = function(server) {
    //DEFINAR URL BASE
    const router = express.Router();
    server.use('/api', router)

    //ROTAS DE CLICO DE PAGAMENTO
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles')
}