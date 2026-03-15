import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import News from './pages/News';
import ArticleDetail from './pages/ArticleDetail';
import Models from './pages/Models';
import MCP from './pages/MCP';
import Brand from './pages/Brand';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <BookmarkProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="tools" element={<Tools />} />
                  <Route path="news" element={<News />} />
                  <Route path="news/:id" element={<ArticleDetail />} />
                  <Route path="models" element={<Models />} />
                  <Route path="mcp" element={<MCP />} />
                  <Route path="brand" element={<Brand />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
              </Routes>
            </Router>
          </BookmarkProvider>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
