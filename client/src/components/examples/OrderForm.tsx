import OrderForm from '../OrderForm';

export default function OrderFormExample() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <OrderForm 
        onSubmit={(data) => console.log('Order submitted:', data)}
      />
    </div>
  );
}
