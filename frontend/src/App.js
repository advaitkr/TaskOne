import logo from './logo.svg';
import PaginationComponent, { Table } from './components/posts'
import { usePagination } from './hooks/usePagination';
import { fetchBooks } from './utils/api';
function App() {
  const {} = usePagination(10,fetchBooks);
  return (
     <div>
       <PaginationComponent/>
       </div>
    
  );
}

export default App;
