const router = require("express").Router();
const db = require("../models");;

// POST request
router.post("/articulos", async (req, res) => {
    try {
        const articulo = {
            codigo: req.body.codigo,
            descripcion: req.body.descripcion,
            cuenta_contable_id: req.body.cuenta_contable_id
        }
        await db.Articulo.create(articulo);
        res.json({
            success: true,
            message: "Exitosamente añadido el articulo."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// GET request 
router.get("/articulos", async (req, res) => {
    try {
        const articulos = await db.Articulo
                                .findAll({
                                            where: {
                                                estado: 'ACTIVO'
                                            }
                                        });
        res.json({
            success: true,
            data: articulos
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// GET request
router.get("/articulos/:id", async (req, res) => {
    try {
        const articulo = await db.Articulo.findByPk(req.params.id);
        res.json({
            success: true,
            data: articulo
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// UPDATE request
router.put("/articulos/:id", async (req, res) => {
    try {
        const articulo = await db.Articulo.findByPk(req.params.id);
        articulo.codigo = req.body.codigo;
        articulo.descripcion = req.body.descripcion;
        articulo.cuenta_contable_id = req.body.cuenta_contable_id;

        await articulo.save();
        res.json({
            success: true,
            message: "Exitosamente actualizado el articulo."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

// DELETE request
router.delete("/articulos/:id", async (req, res) => {
    try {
        const articulo = await db.Articulo.findByPk(req.params.id);
        articulo.estado = 'INACTIVO';

        await articulo.save();
        res.json({
            success: true,
            message: "Exitosamente inactivado el artículo."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });    
    }
});

module.exports = router;