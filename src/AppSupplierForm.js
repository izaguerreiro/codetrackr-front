import './App.css';

function AppSupplierForm() {
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
      <div className='App-form'>
        <form>
          <label>
            Fornecedor:
            <input type="text" />
          </label>
          <label>
            Contato:
            <input type="text" />
          </label>
          <label>
            Status:
            <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            </select>
          </label>
          <label>
            E-mail:
            <input type="text" />
          </label>
          <label>
            Telefone:
            <input type="text" />
          </label>
          <button className='App-button-cancel'>Cancelar</button>
          <button className='App-button-save'>Salvar</button>
      </form>     
      </div>
    </div>
  )
}

export default AppSupplierForm;