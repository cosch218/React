import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom';

import data from '../data/dummy.json'

// Json을 이용한 데이터를 들고와서 게시글 목록 출력
export default function BoardList() {
  const [dataList, setDataList] = useState(data);

  return (
    <div>
      <h3>BoardList</h3>
      <ul>
        {
          dataList.map( (data) => (
            <li key={data.id}>
              <Link to={`/boardlist/${data.id}`}>
                {data.title}
              </Link>
            </li>
          ) )
        }
      </ul>
    </div>
  )
}
