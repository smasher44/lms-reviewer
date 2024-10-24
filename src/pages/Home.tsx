import Layout from "@/components/containers/layout";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

function App() {

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Home</h1>
      <div>
        <p>Edit src/App.tsx and save to test HMR</p>
      </div>
      <Link to="/testpage">
        <Button variant="default">TestPage</Button>
      </Link>
    </Layout>
  )
}

export default App
