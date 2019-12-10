import React, { Component } from 'react';

import Post from './Post';
import Header from './Header';

class PostList extends Component{

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://image.freepik.com/vetores-gratis/icone-de-perfil-masculino-avatar-hipster-homem-usar-fones-de-ouvido_48369-8728.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bot Irelia",
              avatar: "https://jsonworld.com/content/uploads/blog-images/react.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Leonio Santos",
          avatar: "https://avatars2.githubusercontent.com/u/37078814?s=460&v=4"
        },
        date: "04 Dez 2019",
        content: "Pessoal, alguém já terminou o desafio 9 para fezermos code review?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bot Teemo",
              avatar: "https://jsonworld.com/content/uploads/blog-images/react.png"
            },
            content: "Opa, Leonio! eu ja finalizei tudo, se quiser fazer agora, estou disponivel. Chama pv!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: " Daniel Bezerra",
          avatar: "https://avatars0.githubusercontent.com/u/16024701?s=460&v=4"
        },
        date: "04 Dez 2019",
        content: "Hoje finalizei o 4 desafio porposto pelo Bootcamp, onde o desafio pedia para fazer uma interface semelhante com a do Facebook utilizando React. ",
        comments: [
          {
            id: 1,
            author: {
              name: "Bot React",
              avatar: "https://jsonworld.com/content/uploads/blog-images/react.png"
            },
            content: "Show, Mateus!"
          }
        ]
      }
    ]
  };

  render(){
    return(
      <>
      <Header/>
      <div className="postlist">
        {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
      </div>
      </>
    );
  }
}

export default PostList;