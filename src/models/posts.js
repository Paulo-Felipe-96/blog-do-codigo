const postsDao = require("../database/posts/posts-dao");
const {
  campoStringNaoNulo,
  campoTamanhoMinimo,
  campoTamanhoMaximo,
} = require("../helpers/commonValidations");

class Post {
  constructor(post) {
    this.titulo = post.titulo;
    this.conteudo = post.conteudo;
    this.valida();
  }

  adiciona() {
    return postsDao.adiciona(this);
  }

  valida() {
    campoStringNaoNulo(this.titulo, "título");
    campoTamanhoMinimo(this.titulo, "título", 5);

    campoStringNaoNulo(this.conteudo, "conteúdo");
    campoTamanhoMaximo(this.conteudo, "conteúdo", 140);
  }

  static lista() {
    return postsDao.lista();
  }
}

module.exports = Post;
