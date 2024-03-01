const express = require('express');
const router = express.Router();
const usuario = require('../controller/usuarios');

// Rota para buscar produtos por categoria
router.get('/buscar/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const usuarios = await usuario.findByEmail(req, res);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuario por email' });
  }
});

// Rota para atualizar um produto existente
router.put('/atualizar/:id', async (req, res) => {
  try {
    const updatedUser = await usuario.update(req, res);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// Rota para deletar um produto existente
router.delete('/deletar/:id', async (req, res) => {
  try {
    const usuarioDeletado = await usuario.delete(req, res);
    res.status(200).json({ usuarioDeletado, message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// Outras rotas para ler, atualizar e deletar documentos
// ...

module.exports = router;