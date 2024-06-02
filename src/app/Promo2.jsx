import React, { useEffect, useState } from 'react'
import Main from './Layouts/Main'
import styles from './Promo1.module.css'

const BaseUrl = import.meta.env.VITE_BASE_URL

function Promo2() {
  const [data, setData] = useState()

  console.log(data)

  const fetchData = async () => {
    try {
      const response = await fetch(BaseUrl, {
        method: 'GET',
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const countSchoolHouse = async (count) => {
    try {
      const response = await fetch(BaseUrl + 'update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 1,
          delta: count,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)

      await fetchData()
    } catch (error) {
      console.log('Error:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Main>
      <div className={styles.promo1}>
        <h1>Скидочная карта 15% </h1>
        <b> Кол-во переходов : {data && data[0]['count']} </b>
        <div className="btns">
          <button className="btn" onClick={() => countSchoolHouse(-1)}>
            -
          </button>
          <button className="btn" onClick={() => countSchoolHouse(1)}>
            +
          </button>
        </div>
      </div>
    </Main>
  )
}

export default Promo2
