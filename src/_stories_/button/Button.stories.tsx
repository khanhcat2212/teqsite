import type { Story } from "@ladle/react";
import Button from "@src/components/button/Button";

import "@src/index.css";

export const Primary: Story = () => (
  <Button variant="primary" size="lg">
    SEARCH OTHER JOBS
  </Button>
);

export const Secondary: Story = () => (
  <Button variant="secondary" size="lg">
    GO TO HOMEPAGE
  </Button>
);

export const Sizes: Story = () => (
  <div className="flex gap-3">
    <Button size="sm">ABOUT US</Button>
    <Button size="md">ABOUT US</Button>
    <Button size="lg">ABOUT US</Button>
  </div>
);
