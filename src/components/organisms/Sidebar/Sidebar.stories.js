import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('Normal', () => <Sidebar />);
