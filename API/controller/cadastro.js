const Usuario = require("../models/usuarios");
const Gestor = require("../models/gestor");


exports.create = async (req, res) => {
  try {
    const { nome, email, senha, cargo, turma } = req.body;

    const novoUsuario = await Usuario.create({ nome, email, senha, cargo, turma });

    res.status(201).json({ newProductId: novoUsuario.id, message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error('Erro no bloco try-catch:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Erro ao cadastrar usuário" });
    }
  }
};


exports.createGestor = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const novoGestor = await Gestor.create({ nome, email, senha });

    res.status(201).json({ newProductId: novoGestor.id, message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error('Erro no bloco try-catch:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Erro ao cadastrar usuário" });
    }
  }
};

