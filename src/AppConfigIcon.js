import { IconContext } from 'react-icons';

export default function ConfigIcon({ children }) {
  return (
    <>
      <IconContext.Provider value={{ color: '#BEB9FF', size: '20%' }}>
        {children}
      </IconContext.Provider>
    </>
  );
}