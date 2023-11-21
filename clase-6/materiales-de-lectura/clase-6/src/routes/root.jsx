/* eslint-disable react-refresh/only-export-components */
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function Root () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
