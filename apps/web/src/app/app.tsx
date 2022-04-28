// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function App() {
  return (
    <div>
      This is a welcome to {process.env['NX_NAME']},{' '}
      {process.env['NX_EXTRA_MESSAGE']}
    </div>
  );
}

export default App;
