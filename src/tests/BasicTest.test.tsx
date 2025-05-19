import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '@/components/ui/Button/button';

describe('Button', () => {
  it("renders as a button with text 'Click me'", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders as a slot when asChild is true', () => {
    render(
      <Button asChild>
        <a href='#'>Click me</a>
      </Button>
    );

    const link = screen.getByRole('link', { name: 'Click me' });

    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveTextContent('Click me');
  });
});
