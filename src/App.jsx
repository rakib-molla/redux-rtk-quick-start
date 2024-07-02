import TodoList from "./Components/TodoList"
import { useGetAllProductsQuery } from "./Redux/features/product/productApi"

function App() {
  const {data, error, isLoading} = useGetAllProductsQuery()

  return (
    <TodoList data={data}/>
  )
}

export default App
