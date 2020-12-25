const router = require("express").Router();
const db = require("../models");;

// POST request
router.post("/salidas", async (req, res) => {
    try {
        req.body.salidas.map(o => o.tipo = 'SALIDA')
        const salida = {
            codigo: req.body.codigo,
            fecha_salida: req.body.fecha_salida,
            entradas_salidas: req.body.salidas
        }
        await db.NotaSalida.create(salida, {
            include: [db.EntradaSalida],
          });
        res.json({
            success: true,
            message: "Exitosamente añadida la salida."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// GET request 
router.get("/salidas", async (req, res) => {
    try {
        const salidas = await db.NotaSalida
                                .findAll({
                                            where: {
                                                estado: 'ACTIVO'
                                            },
                                            include: [db.EntradaSalida]
                                        });
        res.json({
            success: true,
            data: salidas
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// GET request
router.get("/salidas/:id", async (req, res) => {
    try {
        const salida = await db.NotaSalida
                               .findOne({
                                   where: {
                                       id: req.params.id
                                   },
                                   include: [db.EntradaSalida]
                               });
        res.json({
            success: true,
            data: salida
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
router.delete("/salidas/:id", async (req, res) => {
    try {
        const salida = await db.NotaSalida.findByPk(req.params.id);
        salida.estado = 'INACTIVO';

        await salida.save();
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