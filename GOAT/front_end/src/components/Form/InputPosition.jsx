/*Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.*/


//Dependencies
var React = require('react');
var validator = require('node-validator');

//Component
var InputPosition = React.createClass({
  getInitialState: function(){
    return {
      value : "",
      class : "form-control",
      backgroundColor : "#fff"
    }
  },
  onChange : function(e){
    this.setState({value : e.target.value});
    var regex = new RegExp("[0-9]*") // Our regex to check the rsID format
    //Check if in "xxxxxxxx" form with each x being a number between 0 and 9, at that there is at least one x
    e.target.value.search(regex)==-1?
      this.setState({value:e.target.value, valid:false, backgroundColor : "#f2dede"}) :
      this.setState({value:e.target.value, valid:true,  backgroundColor:"#dff0d8"});
  },
  render : function(){

    var inputStyle={
      display : "block",
      width : "80%",
      height : "40px",
      margin : "auto",
      backgroundColor : this.state.backgroundColor
    }

    return (
      <div>
        <input
          onChange={this.onChange}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          className={this.state.class}
          style={inputStyle}
        />
      </div>
    );
  }
});

module.exports = InputPosition;
