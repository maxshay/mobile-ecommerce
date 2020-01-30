import React, { Component } from 'react';
import styled from 'styled-components';

export default class Filter extends Component {
  state = {
    companyFilter: [],
    colorFilter: []
  }

  handleChangeCom = e => {
    if (e.target.checked) {this.setState({ companyFilter: [...this.state.companyFilter, e.target.value] }) } 
    else {
      let array = [...this.state.companyFilter];
      let index = array.indexOf(e.target.value);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({companyFilter: array});
      }
    }
  }

  handleChangeCol = e => {
    if (e.target.checked) {this.setState({ colorFilter: [...this.state.colorFilter, e.target.value] }) } 
    else {
      let array = [...this.state.colorFilter];
      
      let index = array.indexOf(e.target.value);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({colorFilter: array});
      }
    }
  }

  handleReset = () => {
    this.setState({companyFilter:[], colorFilter: []});
    setTimeout(() => this.props.updateFilter(this.state), 0);
    document.querySelectorAll('.form-check-input').forEach(input => {
      input.checked = false;
    })
  }

  render() {
    return (
    <FilterStyled>
      <form   
        className=""
        noValidate
        onChange={() => {
          setTimeout(() => this.props.updateFilter(this.state), 0);
        }
        }
      >

  
      <div className="px-4 pt-4">
        <h4 className="">Search By</h4>
      </div>
      {/* Accordion Start */}
      <div className="category filter-option mt-3" id="accordion">
      <div className="px-4">
        {/* Company Start */}
        <div className="custom-selector border-top border-bottom border-light px-3 py-2" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <h5 className="m-0">
            <button type="button" className="btn no-border p-0">
              Company
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="indent pl-3 my-3">   
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="apple" onChange={this.handleChangeCom}/>
              <label className="form-check-label" htmlFor="inlineCheckbox1">Apple</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="samsung" onChange={this.handleChangeCom}/>
              <label className="form-check-label" htmlFor="inlineCheckbox2">Samsung</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="google" onChange={this.handleChangeCom}/>
              <label className="form-check-label" htmlFor="inlineCheckbox3">Google</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="nokia" onChange={this.handleChangeCom}/>
              <label className="form-check-label" htmlFor="inlineCheckbox4">Nokia</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="motorola" onChange={this.handleChangeCom}/>
              <label className="form-check-label" htmlFor="inlineCheckbox5">Motorola</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="htc" onChange={this.handleChangeCom}/>
              <label className="form-check-label" htmlFor="inlineCheckbox6">HTC</label>
            </div>
          </div>
        </div>
        {/* Company End */}
        {/* Color Start */}
        <div className="custom-selector border-bottom border-light px-3 py-2" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <h5 className="m-0">
            <button type="button" className="btn no-border p-0">
              Color
            </button>
          </h5>
        </div>

        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="indent pl-3 my-3">
          
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="blue" onChange={this.handleChangeCol}/>
              <label className="form-check-label" htmlFor="inlineCheckbox7">Blue</label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="black" onChange={this.handleChangeCol}/>
              <label className="form-check-label" htmlFor="inlineCheckbox8">Black</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="gold" onChange={this.handleChangeCol}/>
              <label className="form-check-label" htmlFor="inlineCheckbox9">Gold</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="silver" onChange={this.handleChangeCol}/>
              <label className="form-check-label" htmlFor="inlineCheckbox10">silver</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="red" onChange={this.handleChangeCol}/>
              <label className="form-check-label" htmlFor="inlineCheckbox11">Red</label>
            </div>
          </div>
        </div>

        {/* Color End */}

      </div>
      </div>
      {/* Accordion End */}

      <div className="reset-button px-4 mt-2">
        <button type="button" className="btn no-border float-right p-0" onClick={this.handleReset}><p className="m-0">Clear Filters</p></button>
      </div>
      </form>
    </FilterStyled>

    )
  }
}


const FilterStyled = styled.div`
  background-color: white;
  min-height: calc(100vh - 159px);
  margin-top: 1rem;
`;



