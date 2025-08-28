import HeroSectionCon from "./ContactComponants/HeroSectionCon";
import ContactForm from "./ContactComponants/ContactForm";
import ContactMap from "./ContactComponants/ContactMap";
import ContactFaqs from "./ContactComponants/ContactFaqs";
import QuickLinks from "./ContactComponants/QuickLinks";
import BusinessHours from "./ContactComponants/BuisnessHours";

export default function Home() {
  return (
    <div className="">
      <HeroSectionCon/>
      <ContactForm/>
      <QuickLinks/>
      <BusinessHours/>
      <ContactMap/>
      <ContactFaqs/>
    </div>
  );
}
