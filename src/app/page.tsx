import Attendance from "@/component/attendance";
import ExchangeGift from "@/component/exchange-gift";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Hero from "@/component/hero";
import Ranking from "@/component/ranking";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden shadow-md">
      <Header />
      <Hero />
      <Attendance />
      <ExchangeGift />
      <Ranking />
      <Footer />
    </div>
  );
}
