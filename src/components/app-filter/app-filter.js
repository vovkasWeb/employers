/** @format */
import "./app-filter.css";
const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: " На повышения" },
    { name: "moreThen1000", label: " ЗП больше 1000$" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
	 const claszz = active ? "btn-light" :"btn-outline-ligh";
    return (
      <button
        className={`btn ${claszz}`}
        type="button"
        key={name}
		  onClick={()=>props.onFilterSelect(name)}>
        {label}
		  
      </button>
    );
  });
  return (
    <div className="btn-group">
      {buttons}
   
    </div>
  );
};

export default AppFilter;
