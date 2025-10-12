import './globals.css';
import TabsWrapper from './components/TabsWrapper';

export const metadata = {
  title: 'Secret Link',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container">
        <h1>Secret Link</h1>
        <TabsWrapper>
          {children}
        </TabsWrapper>
      </body>
    </html>
  );
}
