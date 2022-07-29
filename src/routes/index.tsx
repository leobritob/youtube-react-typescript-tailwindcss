import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContatosPage, DashboardPage, EmailsPage, WriteNowPage } from 'pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contatos" element={<ContatosPage />} />
        <Route path="/emails" element={<EmailsPage />} />
        <Route path="/escrever-agora" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}
