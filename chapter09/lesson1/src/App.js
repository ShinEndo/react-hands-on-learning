import ErrorBoundary, { BreakThings } from './ErrorBoundary';
import { SiteLayout } from './SiteLayout';

const Callout = ({ children }) => (
  <div className="callout">{children}</div>
);

function App() {
  return (
    <SiteLayout menu={
      <ErrorBoundary>
        <p>Menu</p>
        <BreakThings />
      </ErrorBoundary>
    }>
      <ErrorBoundary> 
          <Callout>Callout<BreakThings /></Callout>
      </ErrorBoundary>
      <ErrorBoundary> 
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
          
      </ErrorBoundary>
    </SiteLayout>
  );
}

export default App;
