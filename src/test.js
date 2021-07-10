const optiontest = (num) => {
    var options = []
  
    for (var i = num; i < num + 5; i++) {
      options.push(<option>option{i}</option>)
    }
  
    return options
  }
  
  function SelectTest(props) {
    return (
      <select>
        {optiontest(props.num)}
      </select>
    )
  };
  
  export default SelectTest