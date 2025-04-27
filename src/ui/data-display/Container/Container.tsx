import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  fluid?: boolean;
};

export const Container: React.FC<ContainerProps> = ({ children, fluid = false }) => (
  <div className={`${fluid ? 'w-full' : 'container mx-auto'} px-4`}>{children}</div>
);

export default Container;
