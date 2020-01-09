import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from '../../assents/logo.png'
import { MdInsertDriveFile } from 'react-icons/md'
import api from '../../service/api'
import Dropzone from 'react-dropzone'

export default function Box(props) {
  const [box, setBox] = useState({})

  function handleUpload(files) {
    files.forEach(file => {
      const data = new FormData()
      const id = props.match.params.id

      data.append('file', file)
      api.post(`/boxes/${id}/files`, data)
      window.location.reload()
    })
  }

  async function loadFiles() {
    const id = props.match.params.id
    const response = await api.get(`boxes/${id}`)
    setBox(response.data)
  }
  useEffect(() => {
    loadFiles()
  }, [])
  return (
    <div id="box-container">
      <header>
        <img src={logo} alt=""></img>
        <h1>{box.title}</h1>
      </header>
      <Dropzone onDropAccepted={handleUpload}>
        {({ getRootProps, getInputProps }) => (
          <div className="upload"  {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste arquivos ou clique aqui</p>
          </div>
        )}
      </Dropzone>

      <ul>
        {box.files && box.files.map(file => (
          <li key={file._id}>
            <a className="fileInfo" href={file.url} target="_blank">
              <MdInsertDriveFile size={24} color="#a5cfff" />
              <strong>{file.title}</strong>
            </a>
            <span>{file.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
