/** @format */
import "./app-filter.css";
const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники",colored:false},
    { name: "rise", label: " На повышения",colored:false},
    { name: "moreThen1000", label: " ЗП больше 1000$",colored:true },
  ];
  const buttons = buttonsData.map(({ name, label,colored }) => {
    const active = props.filter === name;
	 const claszz = active ? "btn-light" :"btn-outline-ligh";
	 const style = colored ? {color: "red"}: null
    return (
      <button
        className={`btn ${claszz}`}
        type="button"
        key={name}
		  onClick={()=>props.onFilterSelect(name)}
		  style={style}>
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
