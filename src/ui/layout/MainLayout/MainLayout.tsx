import React from 'react';
import Container from '../../data-display/Container/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type MainLayoutProps = {
  children: React.ReactNode;
  containerFluid?: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, containerFluid = false }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow py-8">
      <Container fluid={containerFluid}>{children}</Container>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
