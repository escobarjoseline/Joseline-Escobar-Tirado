import React,{useEffect, useState} from 'react'

export const TablaApp = () => {

  const [prodcutos, setProductos] = useState([])

    const fetchData = () => {
      fetch("http://scratchya.com.ar/react/datos.php")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setProductos(data)
        })
    }  

    useEffect(() => {
      fetchData()
    }, [])

    return (
      <>
        <h2>Tabla</h2>
        <hr></hr>
        <table class="mas">
        <thead>
          <tr>
            <th>Código</th>
            <th>Prdoucto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {prodcutos.map(producto=>(
            <tr>
              <td>{producto.codigo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
          </tr>
          ))}
          </tbody>
        </table>
      </>
  )
}