'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Redirect to the Astro build output
    window.location.href = '/';
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#F8FAFC',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{ color: '#0A1628', fontSize: '28px' }}>Building Your Premium Cybersecurity Site...</h1>
      <p style={{ color: '#64748B' }}>Your Astro + HeroUI website is being prepared</p>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #E2E8F0',
        borderTop: '4px solid #2563EB',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
