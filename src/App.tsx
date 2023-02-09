import { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import './App.css'

import { FloatButton, SearchInput } from './components';
import { PokeModal, PokemonsTable } from './containers';
import { useFetchPokemons } from './hooks';


function App() {

  const { dataPokemons } = useFetchPokemons();
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <main className="App">
      <SearchInput />
      <PokeModal isOpen={modalIsOpen} onCloseModal={() => setModalIsOpen(false)} />
      <FloatButton action={() => setModalIsOpen(true)} />
      <PokemonsTable action={() => setModalIsOpen(true)} data={dataPokemons} />
    </main>
  )
}

export default App
