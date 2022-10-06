import react from "react"
import Article from "./Article"

function ArticleList({ posts }) {
    const postsItem = posts.map( post => <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />)
    return (
            <main>
                {postsItem}
            </main>
    )
}

export default ArticleList

{/*
const Posts = blogData.posts
const List = Posts.map(article => {
return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />   {/ minutes= {post.minutes}*/}
