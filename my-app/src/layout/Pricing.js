import PricingCard from "../components/Pricing/PricingCard";
import PricingOptions from "../components/Pricing/PricingOptions";
import PricingList from "../components/Pricing/PricingList";

export default function Pricing() {
  return (
    <section>
      <PricingCard
        className="silver"
        header="Free"
        price="$0"
        title="Great for starters"
        details="Perfect solution for starters who need minimal storage space."
      />
      <PricingList
        item1="1 free user subscription"
        item2=" 5 uploads / month"
        item3="File and link sharing"
        item4="50GB of free storage"
      />
      <PricingCard
        className="silver"
        header="Lite"
        price="$7.99/mo"
        title="For large storage needs"
        details="For users who need to collaborate and share large files."
      />
      <PricingList
        item1="5 user subscriptions"
        item2=" 20 uploads / month"
        item3="Automatic data backup"
        item4="150GB of free storage each"
      />
      <PricingCard
        className="green"
        header="Pro"
        price="$14.99/mo"
        title="For power users with large storage needs"
        details="For power users who need to collaborate and encrypt large files. "
      />
      <PricingList
        item1="15 user subscriptions"
        item2=" Unlimited uploads"
        item3="Automatic data backup and encryption"
        item4="1TB of free storage each"
      />
      <PricingOptions />
    </section>
  );
}
