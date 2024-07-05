import Counter from "@/components/Counter/Counter";
import LoadingPage from "./loading";

const HomePage = () => {
  // console.log("Hello world!");
  // throw new Error();
  return (
    <div fallback={<LoadingPage></LoadingPage>}>
      <h1>This is next app</h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;
