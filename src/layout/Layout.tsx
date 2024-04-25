import HeaderComponent from '../components/header/HeaderComponent'
import FooterComponent from '../components/footer/FooterComponent'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </div>
  )
}

export default Layout