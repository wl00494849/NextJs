
class Select {
  constructor(num){
   this.num = num
  }

  optiontest = (num = this.num) => {
    var options = []
  
    for (var i = num; i < num + 5; i++) {
      options.push(<option>option{i}</option>)
    }
  
    return options
  }
}


  function SelectTest(props) {
    let options = new Select(props.num)
    return (
      <select>
        {options.optiontest()}
      </select>
    )
  };
  
  export default SelectTest