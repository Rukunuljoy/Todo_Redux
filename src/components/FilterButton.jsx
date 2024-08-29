import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../redux/actions";



const FilterButton = () => {
   const dispatch = useDispatch();
   const currentState = useSelector((state)=> state.filter)

   const handleFilter = (filter) => {
    dispatch(filterTodo(filter))
   }

  return (
    <div className="flex space-x-4 text-center">
        <select 
        value={currentState}
        onChange={(e)=> handleFilter(e.target.value)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none">
            <option value="ALL">Default</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
        </select>

        <button className="text-sm px-2 py-1 bg-purple-500 text-white rounded">Mark All Completed</button>
    </div>
  )
}

export default FilterButton;