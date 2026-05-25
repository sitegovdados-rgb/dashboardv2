import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Dashboard error:', error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', color: '#791F1F', background: '#FCEBEB', borderRadius: 8, margin: '2rem' }}>
          <strong>Erro ao carregar o dashboard</strong>
          <pre style={{ marginTop: '1rem', fontSize: 12, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {error.message}
          </pre>
          <button
            onClick={() => this.setState({ error: null })}
            style={{ marginTop: '1rem', padding: '6px 12px', cursor: 'pointer' }}
          >
            Tentar novamente
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
