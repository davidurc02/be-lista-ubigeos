import React from "react"

class UbigeoTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  type: this.props.type,
                    data: this.props.data };
                    console.log("propsss: ",this.props)
  }

  generateDeptTable(){
    let data = this.state.data
    let rowArray = []
    console.log("data: ", data)
    data.forEach(function(element) {
      rowArray.push(  <tr>
                        <td>{element[0]}</td>
                        <td>{element[1]}</td>
                        <td>{element[2]}</td>
                        <td>{element[3]}</td>
                        <td>{element[4]}</td>
                        <td>{element[5]}</td>
                      </tr>)
    })
    return(<div>
      {rowArray}
    </div>)
  }
  
  generateDistTable(){

  } 
  generateProvTable(){

  }

  render() {
    console.log("RENDER Table")
    return (
      <div>
        <div className="shopping-list">
          {this.props.type === "DEPARTAMENTO" &&
            this.generateDeptTable
          }
          {this.props.type === "DISTRITO" &&
            this.generateDeptTable
          }
          {this.props.type === "PROVINCIA" &&
            this.generateDeptTable
          }
        </div>
      </div>
    )
  }
}

export default UbigeoTable