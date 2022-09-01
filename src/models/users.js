const bcrypt = require("bcrypt");
const usuariosDao = require("../database/users/usuarios-dao");
const { InvalidArgumentError } = require("../helpers/errors");
const {
  campoStringNaoNulo,
  campoTamanhoMinimo,
  campoTamanhoMaximo,
} = require("../helpers/commonValidations");

class Usuario {
  constructor(usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senhaHash = usuario.senhaHash;
  }

  async adiciona() {
    if (await Usuario.buscaPorEmail(this.email)) {
      throw new InvalidArgumentError("O usuário já existe!");
    }

    return usuariosDao.adiciona(this);
  }

  async adicionaSenha(senha) {
    campoStringNaoNulo(senha, "senha");
    campoTamanhoMinimo(senha, "senha", 8);
    campoTamanhoMaximo(senha, "senha", 64);

    this.senhaHash = await Usuario.geraSenhaHash(senha);
  }

  valida() {
    campoStringNaoNulo(this.nome, "nome");
    campoStringNaoNulo(this.email, "email");
  }

  async deleta() {
    return usuariosDao.deleta(this);
  }

  static async buscaPorId(id) {
    const usuario = await usuariosDao.buscaPorId(id);
    if (!usuario) {
      return null;
    }

    return new Usuario(usuario);
  }

  static async buscaPorEmail(email) {
    const usuario = await usuariosDao.buscaPorEmail(email);
    if (!usuario) {
      return null;
    }

    return new Usuario(usuario);
  }

  static lista() {
    return usuariosDao.lista();
  }

  static geraSenhaHash(senha) {
    const custoHash = 12;
    return bcrypt.hash(senha, custoHash);
  }
}

module.exports = Usuario;
