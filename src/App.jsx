import TextArea from "./TextArea";

const App = () => {
  return (
    <div>
      <marquee behavior="" direction="">
        Edvanta task
      </marquee>
      <h1 className="text-center text-xl font-2xl mt-6 text-yellow-600">
        Code Editor Created by Ritesh Kumar
      </h1>
      <TextArea />
    </div>
  );
};

export default App;
