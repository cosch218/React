import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {
  const { id } = useParams();
  const paramsId = parseInt(id)

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

  const article = articleList.find((item) => item.id === paramsId );
  console.log(article);

  return (
    <div>
      <h1>Article</h1>
      <p>No. {paramsId}</p>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  )
}
