import { FaEdit, FaFilter, FaRegEye, FaTrashAlt } from 'react-icons/fa';

import './App.css';

function AppAssetList() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-logo'
          href='/'
          target='_self'
          rel='noopener noreferrer'
        >
          CodeTrackr
        </a>
        <button>Novo</button>
      </header>
      <div className='App-list-filter'>
        <h3>Fornecedores</h3>
        <input placeholder='Pesquisar'></input>
      </div>
      <div className='App-list'>
        <table>
          <tr className='App-list-table-title'>
            <th>Nome</th>
            <th>Contato</th>
            <th>Status</th>
            <th>Email</th>
            <th><FaFilter/></th>
          </tr>
          <tr className='App-list-table-text'>
            <td>Microsoft Office</td>
            <td>Recursos Humanos</td>
            <td>Ativo</td>
            <td>18/10/2024</td>
            <td>
              <FaRegEye />
              <FaEdit />
              <FaTrashAlt />
            </td>
          </tr>
          <tr className='App-list-table-text'>
            <td>Microsoft Office</td>
            <td>Recursos Humanos</td>
            <td>Recursos Humanos</td>
            <td>18/10/2024</td>
            <td>
              <FaRegEye />
              <FaEdit />
              <FaTrashAlt />
            </td>
          </tr>
          <tr className='App-list-table-text'>
            <td>Microsoft Office</td>
            <td>Recursos Humanos</td>
            <td>Recursos Humanos</td>
            <td>18/10/2024</td>
            <td>
              <FaRegEye />
              <FaEdit />
              <FaTrashAlt />
            </td>
          </tr>
    </table>
      </div>
    </div>
  )
}

export default AppAssetList;