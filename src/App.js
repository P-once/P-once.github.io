import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import Moca from './Examenes/Moca';
import PSQI from './Examenes/PSQI';
import MiniCog from './Examenes/MiniCog';
import Raven from './Examenes/Raven';

function App() {
  return <Raven />;
}

export default App;
