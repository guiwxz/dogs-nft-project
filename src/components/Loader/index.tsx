import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader: React.FC = () => (

  <div style={{ position: 'fixed', width: '50%', height: '50%', opacity: '50%' }}>
    <TailSpin
      height="60"
      width="60"
      color='grey'
      ariaLabel='loading'
      radius={0}
    />
  </div>
)

export default Loader;