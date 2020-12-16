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
            message: "Exitosamente añadida la cuenta."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// GET request 
router.get("/cuentas", async (req, res) => {
    try {
        const cuentas = await db.CuentaContable
                                .findAll({
                                            where: {
                                                estado: 'ACTIVO'
                                            }
                                        });
        res.json({
            success: true,
            data: cuentas
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// GET request
router.get("/cuentas/:id", async (req, res) => {
    try {
        const cuenta = await db.CuentaContable.findByPk(req.params.id);
        res.json({
            success: true,
            data: cuenta
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// UPDATE request
router.put("/cuentas/:id", async (req, res) => {
    try {
        const cuenta = await db.CuentaContable.findByPk(req.params.id);
        cuenta.codigo = req.body.codigo;
        cuenta.nombre = req.body.nombre;

        await cuenta.save();
        res.json({
            success: true,
            message: "Exitosamente actualizada la cuenta."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// DELETE request
router.delete("/cuentas/:id", async (req, res) => {
    try {
        const cuenta = await db.CuentaContable.findByPk(req.params.id);
        cuenta.estado = 'INACTIVO';

        await cuenta.save();
        res.json({
            success: true,
            message: "Exitosamente inactivada la cuenta."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

module.exports = router;