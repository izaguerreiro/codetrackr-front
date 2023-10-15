import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLogin from './AppLogin';
import AppHome from './AppHome';
import AppAssetList from './AppAssetList';
import AppSupplierList from './AppSupplierList';
import AppAssetForm from './AppAssetForm';
import AppSupplierForm from './AppSupplierForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppSupplierForm />
  </React.StrictMode>
);
