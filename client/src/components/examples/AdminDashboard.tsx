import AdminDashboard from '../AdminDashboard';

const mockOrders = [
  {
    id: "order-123",
    senderName: "John Smith",
    senderCountry: "United States",
    receiverName: "김민지",
    receiverAddress: "서울특별시 강남구 테헤란로 123",
    receiverPhone: "+82-10-1234-5678",
    messageCard: "Happy Birthday! Miss you so much and can't wait to see you again. Love always!",
    giftSelection: "original",
    paymentMethod: "card",
    createdAt: "2025-01-07T10:30:00Z"
  },
  {
    id: "order-456",
    senderName: "Sarah Johnson",
    senderCountry: "Canada",
    receiverName: "박서준",
    receiverAddress: "부산광역시 해운대구 마린시티 456",
    receiverPhone: "+82-10-9876-5432",
    messageCard: "Thank you for everything! You deserve this special gift.",
    giftSelection: "luxury",
    paymentMethod: "paypal",
    createdAt: "2025-01-06T15:45:00Z"
  }
];

export default function AdminDashboardExample() {
  return (
    <AdminDashboard 
      orders={mockOrders}
      onLogout={() => console.log('Logout clicked')}
    />
  );
}
