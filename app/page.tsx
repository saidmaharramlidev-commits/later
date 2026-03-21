'use client'



import FieldSelect from "@/components/FieldSelect";
import HomeView from "@/components/HomeView";
import LoadingScreen from "@/components/LoadingScreen";
import Results from "@/components/Results";
import TopicSelect from "@/components/TopicSelect";
import WhenStart from "@/components/WhenStart";
import Why from "@/components/Why";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {



  const { step, loading } = useSelector((state: RootState) => state.counter)





  return (
    <div id="mainHomePage">
      {step === 'home' && <HomeView />}
      {step === 'field' && <FieldSelect />}
      {step === 'topic' && <TopicSelect />}
      {step === 'when' && <WhenStart />}
      {step === 'whyStart' && <Why />}
      {loading === true && <LoadingScreen />}
      {step === 'results' && <Results />}



    </div>
  );
}
