const principalSchema = require("../models/principal");

const createPrincipal = async (req, res) => {
   const principal = principalSchema(req.body);
	principal
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllPrincipal = async (req, res) => {
    principalSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getPrincipal = async (req, res) => {
    const { id } = req.params;
	principalSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editPrincipal = async (req, res) => {
    const { id } = req.params;
	const {
		nombre,
		profecion,
		cv,
	} = req.body;
	principalSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					nombre,
					profecion,
					cv,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deletePrincipal = async (req, res) => {
   const { id } = req.params;
	principalSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createPrincipal,
    getAllPrincipal,
    getPrincipal,
    editPrincipal,
    deletePrincipal,
}