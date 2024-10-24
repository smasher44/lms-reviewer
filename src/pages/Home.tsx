import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Layout from "@/components/containers/layout";

function App() {

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Home</h1>
      <div>
        <p>Edit src/App.tsx and save to test HMR</p>
      </div>
    </Layout>
  )
}

export default App
