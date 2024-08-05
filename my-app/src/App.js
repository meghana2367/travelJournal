import Header from './components/Header';
import Card from './components/Card';
import CardData from './data';

function App() {

  const cardElements = CardData.map(item => {
    return <Card 
      {...item}
    />
  });

  return (
    <div className="App">
      <Header />
      {cardElements}
    </div>
  );
}

export default App;
