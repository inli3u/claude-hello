export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      margin: 0,
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Hello, World!</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.85 }}>
        Built with React + Vite, deployed on GitHub Pages.
      </p>
    </div>
  )
}
