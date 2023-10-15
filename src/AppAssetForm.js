import './App.css';

function AppAssetForm() {
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
            Name:
            <input type="text" />
          </label>
          <label>
            Descrição:
            <input type="text" />
          </label>
          <label>
            Número de série:
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
            Número de série:
            <input type="text" />
          </label>
          <label>
            Versão:
            <input type="text" />
          </label>
          <label>
            Licença:
            <input type="text" />
          </label>
          <label>
            Custo:
            <input type="text" />
                  </label>
          <label>
            Data de aquisição:
            <input type="text" />
          </label>
          <label>
            Data de expiração:
            <input type="text" />
          </label>
          <label>
            Localização:
            <input type="text" />
          </label>
          <label>
            Responsável:
            <input type="text" />
          </label>
          <label>
            Fornecedor:
            <input type="text" />
          </label>
          <button className='App-button-cancel'>Cancelar</button>
          <button className='App-button-save'>Salvar</button>
      </form>     
      </div>
    </div>
  )
}

export default AppAssetForm;