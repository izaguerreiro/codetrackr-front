import { FaChartLine, FaUserTie, FaBoxOpen } from 'react-icons/fa';
import ProgressBar from '@ramonak/react-progress-bar';

import './App.css';
import ConfigIcon from './AppConfigIcon';

function AppHome() {
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
      </header>
      <div className='App-home-content-cards'>
        <a href='/'>
          <div className='App-home-card'>
            <ConfigIcon>
              <FaBoxOpen />
            </ConfigIcon>
            <h3>Ativos</h3>
            <text>10</text>
          </div>
        </a>
        <a href='/'>
          <div className='App-home-card'>
            <ConfigIcon>
              <FaUserTie />
            </ConfigIcon>
            <h3>Fornecedores</h3>
            <text>10</text>
          </div>
        </a>
        <a href='/'>
          <div className='App-home-card'>
            <ConfigIcon>
              <FaChartLine />
            </ConfigIcon>
            <h3>Relatórios</h3>
            <text>10</text>
          </div>
        </a>
      </div>
      <div className='App-home-content-cards'>
        <div className='App-home-metrics-card'>
          <text>Ativos em Uso</text>
          <ProgressBar
            completed={70}
            maxCompleted={200}
            className='ProgressBar-wrapper'
          />
        </div>
        <div className='App-home-metrics-card'>
          <text>Fornecedores ativos</text>
          <ProgressBar
            completed={70}
            maxCompleted={200}
            className='ProgressBar-wrapper'
          />
        </div>
      </div>
    </div>
  );
}

export default AppHome;
