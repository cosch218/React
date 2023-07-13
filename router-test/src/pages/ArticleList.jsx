import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ArticleList() {

  const articleList = [
    {
      id: 1,
      title: '첫번째 기사',
      content: '첫번째 기사 내용'
    },
    {
      id: 2,
      title: '두번째 기사',
      content: '두번째 기사 내용'
    },
    {
      id: 3,
      title: '세번째 기사',
      content: '세번째 기사 내용'
    },
  ];

  return (
    <div>
      <h1>ArticleList</h1>
      <hr />
      <ul>
        {
          articleList.map((article)=>(
            <li key={article.id}>
              <Link to={`/article/${article.id}`}>
                {article.id}. {article.title}
              </Link>
            </li>
          ))
        }
      </ul>
      <hr />
      <Outlet/>
    </div>
  )
}
