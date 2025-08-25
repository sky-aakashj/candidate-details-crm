import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import store from "./redux/store/store";
import { useState } from "react";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [candidateId, _setCandidateId] = useState("231");
  return (
    <Provider store={store}>
      <Dashboard candidateId={candidateId} />
    </Provider>
  );
}

export default App;
