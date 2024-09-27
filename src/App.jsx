import ResumeEditor from "./components/ResumeEditor";
import ResumeView from "./components/ResumeView";

function App() {
  return (
    <div className="flex gap-12">
      <ResumeEditor />
      <ResumeView />
    </div>
  );
}

export default App;
