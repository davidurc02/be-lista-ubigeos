import React from "react"
import UbigeoTable from "./UbigeoTable"

class UbigeoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ubigeoList: [] };
  }

  handleChange(e) {
    let fileReader
    var content
    let that = this

    fileReader = new FileReader()
    fileReader.readAsText(e)
    fileReader.onload = function () {

      content = fileReader.result //file content
      let list = content.split("\n") //List of entries

      list.forEach((elem, ind) => {
        list[ind] = elem.split("/")
      })

      let tempElem
      let tempStr
      list.forEach((listElem, ind) => {
        tempElem = []
        listElem.forEach((element) => {
          if (/"/.test(element)) {
            element = element.replace("\"", "")
          }
          if (/\d{3}/.test(element)) {
            tempStr = [element.trim().substring(0, 3), element.trim().substring(4, element.length)]
          } else if (/\d{2}/.test(element)) {
            tempStr = [element.trim().substring(0, 2), element.trim().substring(3, element.length)]
          } else {
            tempStr = ["", ""]
          }
          tempElem = tempElem.concat(tempStr)
        })
        list[ind] = tempElem
      })
      
      that.setState({ ubigeoList: list })

    }
    return true
  }

  render() {
    return (
      <div>
        <input type="file"
          accept=".txt"
          onChange={(e) => { this.handleChange(e.target.files[0]) }}
        />
        {this.state.ubigeoList.length > 0 &&
          <div>
            <div>
              <h2>Departamentos</h2>
              <UbigeoTable type="DEPARTAMENTO" data={this.state.ubigeoList} />
            </div>
            <div>
              <h2>Provincias</h2>
              <UbigeoTable type="PROVINCIA" data={this.state.ubigeoList} />
            </div>
            <div>
              <h2>Distritos</h2>
              <UbigeoTable type="DISTRITO" data={this.state.ubigeoList} />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default UbigeoList