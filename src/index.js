import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Providers from "./providers";

ReactDOM.render(
  <StrictMode>
    <Providers />
  </StrictMode>,
  document.getElementById('root')
);
