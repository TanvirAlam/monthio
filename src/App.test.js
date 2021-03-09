import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { setupServer } from 'msw/node';
import { rest } from 'msw';

const endUserConfig = [
  { id: 1, component: 'comp1', status: true},
  { id: 2, component: 'comp2', status: true},
  { id: 3, component: 'comp3', status: true},
];

const server = setupServer(
  rest.get('/api/load-components', (req, res,ctx) => {
    return res(ctx.json({ components: endUserConfig }))
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing Orchaster', () => {
  it('starts', () =>{
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Loading Components');
  })

  it('', () =>{
    render(<App />);
    console.log(screen)
  })
});