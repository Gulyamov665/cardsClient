import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const isLoading = false
  const [pin, setPin] = useState('')

  const navigate = useNavigate()

  const enter = (e) => {
    e.preventDefault()

    console.log(typeof pin)
    if (pin == '4444') {
      localStorage.setItem('pin', 4444)
      navigate('/promo1')
    }
  }
  

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <div className={styles.parent}>
          <div>
            <h1>Введите пин</h1>
          </div>

          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />{' '}
          </div>
          {isLoading ? (
            <button className={`${styles['btn']} btn`} type="submit">
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
            </button>
          ) : (
            <button
              className={`${styles['btn']} btn`}
              onClick={(e) => enter(e)}
            >
              Войти
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
