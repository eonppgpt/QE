import GiftCard from '../GiftCard';
import originalSet from "@assets/QE ORIGINAL SET_1759850209760.jpg";

export default function GiftCardExample() {
  return (
    <div className="p-6 max-w-md">
      <GiftCard
        id="original"
        name="QE ORIGINAL SET"
        subtitle="Premium"
        description="Large flower bouquet, chocolate, diffuser"
        price="₩170,000"
        image={originalSet}
        onSendGift={() => console.log('Send gift clicked')}
      />
    </div>
  );
}
