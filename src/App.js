import React, { useState, useEffect, useMemo, useCallback } from 'react'

function App () {
  const [techs, setTech] = useState(['React', 'React Native'])
  const [newTech, setNewTech] = useState('')

  // useCallBack visa fazer com que a funcition só seja reescrita na memória
  // caso houver alteração do state
  const handleAdd = useCallback(() => {
    setTech([...techs, newTech])
    setNewTech('')
  }, [newTech, techs])

  // Nesse caso o use effect será disparado apenas na primeira instacia do componente
  // componentDidMount
  useEffect(() => {
    // Simula componentWillUnmount
    return () => {}
  }, [])

  // Monitarando techs e toda vez que alterado é disparado
  useEffect(() => {

  }, [techs])

  // Deve ser utilizado quando temos calculos dentro do jsx, visando chamar
  // apenas quando necessário
  const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <ul>
        {techs.map((tech) => (<li key={tech}>{tech}</li>))}
      </ul>
      <strong>You have {techSize} technologies</strong>
      <br />
      <input onChange={e => setNewTech(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default App
