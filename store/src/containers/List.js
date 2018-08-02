import React from "react";
import { connect } from "react-redux";
import { addArticle } from '../actions/articleActions';

class List extends React.Component {
  render() {
    let articles = []
    if (this.props.articles === 'undefined') {
      articles.map(a => (
        this.props.addArticle({title: a.title, id: a.id})
        // articles.push(<li key={a.id}>{a.title}</li>)
      ))
    }
    console.log(articles)
    return (
      <div>
        <ul>
          {articles}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    article: state.article
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addArticle: (article) => {
      dispatch(addArticle(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
