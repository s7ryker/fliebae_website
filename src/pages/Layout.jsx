import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
    </>
  )
}
