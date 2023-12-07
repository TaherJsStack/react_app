import ItemsList from "../../Components/ItemsList";

function TableItemsDataList(props) {
  return (
    <div>
      <h1>Table Data List</h1>
      <ItemsList list={props.dataList} />
    </div>
  );
}

export default TableItemsDataList;
