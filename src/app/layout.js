import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Nav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
