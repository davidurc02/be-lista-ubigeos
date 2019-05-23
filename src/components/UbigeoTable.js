import React from "react"

class UbigeoTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      data: this.props.data
    }
  }

  generateDeptTable() {

    let data = this.state.data
    let newTableData = []//table data as strings
    let rowArray = []//html table with data
    let includedItems = []
    let keyid = 0

    data.forEach(function (dataItem) {
      if (newTableData.length > 0) {
        if (!includedItems.includes(dataItem[0])) {
          newTableData.push([dataItem[0], dataItem[1], "-", "-"])
          includedItems.push(dataItem[0])
        }
      } else {
        newTableData.push([dataItem[0], dataItem[1], "-", "-"])
        includedItems.push(dataItem[0])
      }
    })

    newTableData.forEach((rowElement) => {
      keyid++
      rowArray.push(<tr key={"deptr"+keyid}>
        <td>{rowElement[0]}</td>
        <td>{rowElement[1]}</td>
        <td>{rowElement[2]}</td>
        <td>{rowElement[3]}</td>
      </tr>)
    })

    return rowArray
  }

  generateProvTable() {

    let data = this.state.data
    let newTableData = []//table data as strings
    let rowArray = []//html table with data
    let includedItems = []
    let keyid = 0

    data.forEach(function (dataItem) {
      if (newTableData.length > 0) {
        if (!includedItems.includes(dataItem[2]) && dataItem[2].trim().length > 0) {
          newTableData.push([dataItem[2], dataItem[3], dataItem[0].trim().length > 0 ? dataItem[0] : "-", dataItem[1].trim().length > 0 ? dataItem[1] : "-"])
          includedItems.push(dataItem[2])
        }
      } else {
        if (dataItem[2].trim().length > 0) {
          newTableData.push([dataItem[2], dataItem[3], dataItem[0].trim().length > 0 ? dataItem[0] : "-", dataItem[1].trim().length > 0 ? dataItem[1] : "-"])
          includedItems.push(dataItem[2])
        }
      }
    })

    newTableData.forEach((rowElement) => {
      keyid++
      rowArray.push(<tr key={"provr"+keyid}>
        <td>{rowElement[0]}</td>
        <td>{rowElement[1]}</td>
        <td>{rowElement[2]}</td>
        <td>{rowElement[3]}</td>
      </tr>)
    })

    return rowArray

  }

  generateDistTable() {

    let data = this.state.data
    let newTableData = []//table data as strings
    let rowArray = []//html table with data
    let includedItems = []
    let keyid = 0

    data.forEach(function (dataItem) {
      if (newTableData.length > 0) {
        if (!includedItems.includes(dataItem[4]) && dataItem[4].trim().length > 0) {
          newTableData.push([dataItem[4], dataItem[5], dataItem[2].trim().length > 0 ? dataItem[2] : "-", dataItem[3].trim().length > 0 ? dataItem[3] : "-"])
          includedItems.push(dataItem[4])
        }
      } else {
        if (dataItem[4].trim().length > 0) {
          newTableData.push([dataItem[4], dataItem[5], dataItem[2].trim().length > 0 ? dataItem[2] : "-", dataItem[3].trim().length > 0 ? dataItem[3] : "-"])
          includedItems.push(dataItem[4])
        }
      }
    })

    newTableData.forEach((rowElement) => {
      keyid++
      rowArray.push(<tr key={"distr"+keyid}>
        <td>{rowElement[0]}</td>
        <td>{rowElement[1]}</td>
        <td>{rowElement[2]}</td>
        <td>{rowElement[3]}</td>
      </tr>)
    })

    return rowArray
  }


  render() {
    let generateDeptTable = this.generateDeptTable()
    let generateProvTable = this.generateProvTable()
    let generateDistTable = this.generateDistTable()
    return (
      <div>
        <table className="myTable">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Código Padre</th>
              <th>Descripción Padre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.type === "DEPARTAMENTO" &&
              generateDeptTable
            }
            {this.props.type === "PROVINCIA" &&
              generateProvTable
            }
            {this.props.type === "DISTRITO" &&
              generateDistTable
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default UbigeoTable