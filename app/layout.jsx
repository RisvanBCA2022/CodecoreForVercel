import Navbar from '@/components/Navbar/Navbar'
import '../components/Home/App.css'
import { Home } from '@/components'
import { ReduxProvider } from '@/redux/Provider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <ReduxProvider>  
    <html>
    <body>
    <ToastContainer />
        {children}
    </body>
    </html>
  </ReduxProvider> 

  )
}
