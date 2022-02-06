import React, { Component } from 'react';
import { Button,Row,Col,Form,} from "react-bootstrap";

//class component is used
class App extends Component {
  constructor(){

    super();
    //function to bind data
    // this.handleClick = this.handleClick.bind(this);
    this.handleData = this.handleData.bind(this);


    this.state={
    
      isOpen:false,
      try:"Select a value",
      first:true,
      arr:["Yes","Probably Not"],
    }
  }
  //function to open dropdown on hover.
  handleOpen = () => {
    this.setState({ isOpen: true ,
    first:true})
    console.log("open")
  }

  handleClose = () => {
     this.setState({ isOpen: false })
     console.log("close")
  }
  // handleClick=()=>{
  // this.setState({
  //   isData:true,
  // })
  //   console.log("abcdef",this.state.isData);
  // }
  

  //to display data.
  handleData=(item)=>{
    this.setState({
      try:item,
      first:false,
    })
    setTimeout(() => {
      this.setState({
        first:true,
          });
  }, 1000)
  }
  render(){
    const {arr,isData,first}=this.state;
    console.log(arr)
  return (
    <div className="container" style={{marginTop:"150px"}}>
      <Form>
  <Row className="align-items-center overColor">
    <Col xs="auto" className="my-1 mt-3 color2">
      <Form.Label
        className="me-sm-2"
        htmlFor="inlineFormCustomSelect"
        visuallyHidden
      >
      <strong style={{fontSize:"24px"}}> Should you use a Dropdown ? </strong>
      </Form.Label>
      <br/>
      {/* <Form.Select className="me-sm-2" 
      id="inlineFormCustomSelect"
      onClick={this.handleClick}
      onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          open={ this.state.isOpen }>
        <option value="default" selected disabled >
          Select
        </option>
      
         {this.state.arr.map((item)=>{
                  return <option value={item} >{item}</option>

        })}
       
       
        
      </Form.Select> */}
     
    </Col>
   
   
  {/* </Row>
</Form> */}
<div class="drop collapsed">
  <Button className="drop2">
   {this.state.try}
  </Button>

  <ul className="ulclass">
  {this.state.first==true?
        this.state.arr.map((item)=>{
          return <option className="data" onClick={()=>this.handleData(item)}
                  
          >{item}</option>
        }):""}
    
       
  </ul>
</div>
</Row>
</Form>



     </div>

  );
}
}
export default App;

