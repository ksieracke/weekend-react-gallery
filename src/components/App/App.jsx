import GalleryList from '../GalleryList/GalleryList';


function App() {

    

    return (
      <div data-testid="app">
        <header style={{textAlign: 'center'}}>
          <h1 style={{color:'white'}}>The Many Faces of my Daughter Laura</h1>
        </header>
        <GalleryList  />
      </div>
    );
}

export default App;


