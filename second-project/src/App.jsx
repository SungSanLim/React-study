import './App.css'
import ProductCard from './ProductCard'
import CardLayout from './CardLayout'
import withConditionalCard from './withConditionalCard'
import SimpleCard from './SimpleCard'

const ConditionalSimpleCard = withConditionalCard(SimpleCard)

export const App2 = () => (

  <>
    <ConditionalSimpleCard 
      title="Active Card" 
      content="This card is active." 
      disabled={false} 
    />
    
    <ConditionalSimpleCard 
      title="Disabled Card" 
      content="This card is disabled." 
      disabled={true} 
    />
  </>

)



export const App1 = () => (
  <div>
    <CardLayout title="About">
      <p>Props of Components</p>
    </CardLayout>
  
    <CardLayout title="Details">
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </CardLayout>

    <CardLayout title="Contact">
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </CardLayout>
  </div>
)

const App = () => {
  const product = { 
    name: "Laptop", 
    price: 123.4567 
  };

  return (
    <ProductCard 
    {...product} 
    formatPrice={(p) => `$${p.toFixed(2)}`}
    />
  );
}

export default App