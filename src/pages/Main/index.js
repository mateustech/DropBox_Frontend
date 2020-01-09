import React, { useState } from 'react';
import api from '../../service/api'
import './styles.css';
import logo from '../../assents/logo.png'

export default function Main({ history }) {
  const [title, setTitle] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      title
    }
    const response = await api.post('/boxes', data)
    history.push(`/box/${response.data._id}`)
  }

  return (
    <div id="main-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt=""></img>
        <input
          placeholder="Criar um Box"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
