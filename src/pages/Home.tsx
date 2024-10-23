import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"


function App() {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <div>
        <Link to="/testpage">
          <Button variant="default">Test</Button>
        </Link>
        <p>Edit src/App.tsx and save to test HMR</p>
      </div>
    </div>
  )
}

export default App
