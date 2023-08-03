import Provider from './SessionProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import ErrorBoundary from './ErrorBoundary';;
import Error from './error';
import GoogleTagManager from './Google';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ErrorDev',
  description: 'An online web development application designed to assist developers in storing errors and URLs, while also providing a platform to showcase their portfolios and securely manage their API keys............... Still in Progress',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager/>
      <body className={inter.className}>

      <Provider>
          <ErrorBoundary fallback={<Error />}>
            {children}
          </ErrorBoundary>
        </Provider>
      </body>
    </html>
  )
}
