import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Next Property Project',
    description: 'This is my first Next.js learning project for practical understanding',
    keywords: ['next.js, react.js, learning']
}
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <AuthProvider>
                    <NavBar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    )
};

export default RootLayout;