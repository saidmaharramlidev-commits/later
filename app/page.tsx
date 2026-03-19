'use client'



import FieldSelect from "@/components/FieldSelect";
import HomeView from "@/components/HomeView";
import TopicSelect from "@/components/TopicSelect";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {



  const { step } = useSelector((state: RootState) => state.counter)





  return (
    <div id="mainHomePage">
      {step === 'home' && <HomeView />}
      {step === 'field' && <FieldSelect />}
      {step === 'topic' && <TopicSelect />}


    </div>
  );
}
