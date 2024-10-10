import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="flex flex-row gap-4 justify-center items-center h-screen"> 
      <Link to="/zustand">
        <Button variant="default">Zustand Page</Button>
      </Link>
      <Link to="/components">
        <Button variant="secondary">Components Page</Button>
      </Link>
    </div>
  );
}

export default Home;