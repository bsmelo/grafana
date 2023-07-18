import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { AlertLabels } from './AlertLabels';

describe('AlertLabels', () => {
  it('should toggle show / hide common labels', async () => {
    const labels = { foo: 'bar', bar: 'baz', baz: 'qux' };
    const commonLabels = { foo: 'bar', baz: 'qux' };

    render(<AlertLabels labels={labels} commonLabels={commonLabels} />);
    expect(screen.getByText('+2 common labels')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Hide common labels')).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('+2 common labels')).toBeInTheDocument();
    });
  });
});
