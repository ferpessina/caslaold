var TorneoCtrl = require('../controllers/torneoController');

module.exports = function(express,app) {

	/**
	 * @swagger
	 * definition:
	 *   Torneo:
	 *     properties:
	 *       nombre:
	 *         type: string
	 *       jugadores_por_equipo:
	 *         type: integer
	 *       activo:
	 *         type: boolean
	 *		 equipos:
	 *         $ref: Equipo
	*/
	
	var torneos = express.Router();


	/**
	 * @swagger
	 * /torneo:
	 *   get:
	 *     tags:
	 *       - Torneo
	 *     description: Returns all torneos
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of torneos
	 *         schema:
	 *           $ref: '#/definitions/Torneo'
	 */
	torneos.get('/', TorneoCtrl.findAllTorneos);


	 /**
	 * @swagger
	 * /torneo:
	 *   post:
	 *     tags:
	 *       - Torneo
	 *     description: Creates a new torneo
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: torneo
	 *         description: Torneo object
	 *         in: body
	 *         required: true
	 *         schema:
	 *           $ref: '#/definitions/Torneo'
	 *     responses:
	 *       200:
	 *         description: Successfully created
	 */
	 torneos.post('/', TorneoCtrl.addTorneo);

	 /**
	 * @swagger
	 * /torneo/{id}:
	 *   get:
	 *     tags:
	 *       - Torneo
	 *     description: Returns a single torneo
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Torneo's id
	 *         in: path
	 *         required: true
	 *         type: integer
	 *     responses:
	 *       200:
	 *         description: A single torneo
	 *         schema:
	 *           $ref: '#/definitions/Torneo'
	 */
	 torneos.get('/:id', TorneoCtrl.findById);


	 /**
	 * @swagger
	 * /torneo/{id}:
	 *   put:
	 *     tags:
	 *       - Torneo
	 *     description: Updates a single torneo
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Torneo's id
	 *         in: path
	 *         required: true
	 *         type: integer
	 *       - name: torneo
	 *         description: New fields for the Torneo resource
	 *         in: body
	 *         required: true
	 *         schema:
	 *           $ref: '#/definitions/Torneo'
	 *     responses:
	 *       200:
	 *         description: Successfully created
	 */
	 torneos.put('/:id', TorneoCtrl.updateTorneo);

	 /**
	 * @swagger
	 * /torneo/{id}:
	 *   delete:
	 *     tags:
	 *       - Torneo
	 *     description: Deletes a single torneo
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Torneo's id
	 *         in: path
	 *         required: true
	 *         type: integer
	 *     responses:
	 *       200:
	 *         description: Successfully deleted
	 */
	torneos.delete('/:id', TorneoCtrl.deleteTorneo);

	// torneos.put('/:id/:equipo', TorneoCtrl.addEquipo);


	app.use('/torneo', torneos);

};