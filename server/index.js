const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize, Model, DataTypes } = require("sequelize");

app.use(cors());

// Create Sequelize instance
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite",
});

// Define Contact model
class Contact extends Model {}
Contact.init(
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "No notes added",
		},
		verified: {
			type: DataTypes.STRING,
			defaultValue: false,
		},
	},
	{ sequelize, modelName: "contact" }
);

// Sync models with database
sequelize.sync();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD routes for contact model
app.get("/contacts", async (req, res) => {
	const contacts = await Contact.findAll();
	res.json(contacts);
});

app.get("/contacts/:id", async (req, res) => {
	const contact = await Contact.findByPk(req.params.id);
	res.json(contact);
});

app.post("/contacts", async (req, res) => {
	const contact = await Contact.create(req.body);
	res.json(contact);
});

app.put("/contacts/:id", async (req, res) => {
	const contact = await Contact.findByPk(req.params.id);
	if (contact) {
		await contact.update(req.body);
		res.json(contact);
	} else {
		res.status(404).json({ message: "contact not found" });
	}
});

app.delete("/contacts/:id", async (req, res) => {
	const contact = await Contact.findByPk(req.params.id);
	if (contact) {
		await contact.destroy();
		res.json({ message: "contact deleted" });
	} else {
		res.status(404).json({ message: "contact not found" });
	}
});

// Start server
app.listen(8080, () => {
	console.log("server listening on port 8080");
});
