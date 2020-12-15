const router = require("express").Router();
const db = require("../models");;

// POST request
router.post("/cuentas", async (req, res) => {
    try {
        const cuenta = {
            codigo: req.body.codigo,
            nombre: req.body.nombre
        }
        await db.CuentaContable.create(cuenta);
        res.json({
            success: true,
            message: "successfuly added an address"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// // GET request 
// router.get("/cuentas", verifyToken, async (req, res) => {
//     try {
//         let addresses = await Address.find({ user: req.decoded._id });

//         res.json({
//             success: true,
//             addresses: addresses
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         });    
//     }
// })
module.exports = router;