import './App.css'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
     <MantineProvider>
      <h1>Wuwa Database</h1>
      </MantineProvider>
    </>
  )
}

export default App
