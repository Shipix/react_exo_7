import React, { Component } from 'react'
import Article from './Article';

export default class Articles extends Component {

    state = {
        articles: [
            {
                id: 1,
                nom: 'Pantalon',
                prix: 35,

            },
            {
                id: 2,
                nom: 'Chemise',
                prix: 29,
            },
            {
                id:3,
                nom: 'Ikuzan',
                prix: "Beaucoup trop pour ce BG"
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.articles.map(article =>(
                   <Article
                        key = {article.id}
                        nom = {article.nom}
                        prix = {article.prix}
                   /> 
                ))}
            </div> 
        )
    }
}
