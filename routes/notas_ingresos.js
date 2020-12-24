const router = require("express").Router();
const db = require("../models");;

// POST request
router.post("/ingresos", async (req, res) => {
    try {
        const ingreso = {
            codigo: req.body.codigo,
            fecha_ingreso: req.body.fecha_ingreso,
            entradas_salidas: req.body.entradas
        }
        await db.NotaIngreso.create(ingreso, {
            include: [db.EntradaSalida],
          });
        res.json({
            success: true,
            message: "Exitosamente añadido el ingreso."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// GET request 
router.get("/ingresos", async (req, res) => {
    try {
        const cuentas = await db.NotaIngreso
                                .findAll({
                                            where: {
                                                estado: 'ACTIVO'
                                            },
                                            include: [db.EntradaSalida]
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
router.get("/ingresos/:id", async (req, res) => {
    try {
        const cuenta = await db.NotaIngreso
                               .findOne({
                                   where: {
                                       id: req.params.id
                                   },
                                   include: [db.EntradaSalida]
                               });
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

// // UPDATE request
// TODO 
// router.put("/ingresos/:id", async (req, res) => {
//     try {
//         const cuenta = await db.CuentaContable.findByPk(req.params.id);
//         cuenta.codigo = req.body.codigo;
//         cuenta.nombre = req.body.nombre;

//         await cuenta.save();
//         res.json({
//             success: true,
//             message: "Exitosamente actualizada la cuenta."
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         });    
//     }
// });

// DELETE request
router.delete("/ingresos/:id", async (req, res) => {
    try {
        const ingreso = await db.NotaIngreso.findByPk(req.params.id);
        ingreso.estado = 'INACTIVO';

        await ingreso.save();
        res.json({
            success: true,
            message: "Exitosamente inactivada el ingreso."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

module.exports = router;