const Admin = require("../models/admin");
const Pessoa = require("../models/pessoa");
const Unidade = require("../models/unidade");
const Vacina = require("../models/vacina");
const Registro = require("../models/registros");

const faker = require("faker");

const jwt = require("jsonwebtoken");

// log in the administrator
module.exports.login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });

    if (!admin)
      return res.json({ message: "Admin não cadastrado", status: 400 });
    if (admin.senha != req.body.senha)
      return res.json({ message: "Email ou senha incorretos", status: 400 });

    const token = jwt.sign(
      { id: admin._id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.json({ admin: admin, token: token });
  } catch (error) {
    console.log(error);
  }
};

// generate random people and vacination units with faker module
module.exports.generateRandomData = async (req, res) => {
  for (let i = 0; i < 1; i++) {
    await Unidade.create({
      nome: faker.company.companyName(),
      cidade: faker.address.city(),
      estado: faker.address.state(),
    });
    await Pessoa.create({
      nome: faker.name.findName(),
      dataNascimento: faker.date.between("1950-01-01", "2020-01-01"),
      cpf: faker.datatype.number(),
    });
  }
};

// get all people and sort by name
module.exports.fetchAllPeople = async (req, res) => {
  try {
    let people = await Pessoa.find({}).sort({ nome: "asc" });
    if (people) return res.json(people);
  } catch (error) {
    console.log(error);
  }
};

// get all people and sort by name
module.exports.fetchAllUnits = async (req, res) => {
  try {
    let units = await Unidade.find({}).sort({ nome: "asc" });
    if (units) return res.json(units);
  } catch (error) {
    console.log(error);
  }
};

// registrates a person
module.exports.registerPerson = async (req, res) => {
  if (!req.body.nome || !req.body.cpf || !req.body.date) {
    return res.json({ message: "Informe todos os campo!", severity: "error" });
  }
  let newPerson = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    dataNascimento: req.body.date,
  };
  try {
    const person = await Pessoa.create(newPerson);
    if (person)
      return res.json({
        message: "Pessoa registrada com sucesso!",
        severity: "success",
      });
  } catch (error) {
    console.log(error);
  }
};

// get all vaccines
module.exports.vaccines = async (req, res) => {
  try {
    const vaccines = await Vacina.find({});
    if (vaccines) return res.json(vaccines);
  } catch (error) {
    console.log(error);
  }
};

// get all data
module.exports.data = async (req, res) => {
  try {
    const people = await Pessoa.find({});
    const vaccines = await Vacina.find({});
    const unites = await Unidade.find({});

    if (people && vaccines && unites)
      return res.json({ people, vaccines, unites });
  } catch (error) {
    console.log(error);
  }
};

// inclusion of registers
module.exports.inclusion = async (req, res) => {
  const { personId, uniteId, vaccineId, dose } = req.body;
  try {
    await Registro.create({
      pessoaId: personId,
      unidadeId: uniteId,
      vacinaId: vaccineId,
      dose,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.overallData = async (req, res) => {
  try {
    const jansenId = await Vacina.findOne({ nome: "Janssen" }, "_id");
    const PfizerId = await Vacina.findOne({ nome: "Pfizer" }, "_id");
    const CoronavacId = await Vacina.findOne({ nome: "Coronavac" }, "_id");
    const AstraZenecaId = await Vacina.findOne({ nome: "AstraZeneca" }, "_id");

    const appliedDoses = await Registro.count({});
    const unicDoses = await Registro.find({ dose: "0" }).count();
    const firstDoses = await Registro.find({ dose: "1" }).count();
    const secondDoses = await Registro.find({ dose: "2" }).count();

    const appliedJansen = await Registro.find({ vacinaId: jansenId }).count();
    const appliedPfizer = await Registro.find({ vacinaId: PfizerId }).count();
    const appliedCoronavac = await Registro.find({
      vacinaId: CoronavacId,
    }).count();
    const appliedAstraZeneca = await Registro.find({
      vacinaId: AstraZenecaId,
    }).count();

    return res.json({
      appliedDoses,
      unicDoses,
      firstDoses,
      secondDoses,
      appliedJansen,
      appliedPfizer,
      appliedCoronavac,
      appliedAstraZeneca
    });
  } catch (error) {}
};
