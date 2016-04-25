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

// Author of the file : Victor Dupuy
// mail : victor.dupuy@hei.fr

//Dependencies
var React = require('react');
var Reflux = require('reflux');

var SnpStore = require('../../reflux/SnpStore.jsx');
var ManhattanStore = require('../../reflux/ManhattanStore.jsx');
var SnpsForGeneStore = require('../../reflux/SnpsForGeneStore.jsx');

//SubComponents
var QueryForm = require('../Form/QueryForm.jsx');

//Component
var FormPanel = React.createClass({
  mixins : [
    Reflux.listenTo(SnpStore, 'onChange'),
    Reflux.listenTo(ManhattanStore, 'onChange'),
    Reflux.listenTo(SnpsForGeneStore, 'onChange')
  ],
  onChange : function(event, data){
    switch(event){
      case 'noPhenotype':
        this.refs.queryForm.setState({'submited' : false});
        this.setState({message : 'No Significant Phenotype !'});
        break;
      case 'wait':
        this.setState({message : 'Querying data right now...'});
        break;
      default:
        console.log('nothing');
    }
  },
  getInitialState : function(){
    return {
      message : "Choose your params"
    }
  },
  render : function(){
    divStyle = {
      marginTop : "50px",
      textAlign : 'center'
    }
    return (
      <div style={divStyle} className ="panel col-xs-12 col-md-4 col-centered">
        <h2>{this.state.message}</h2>
        <QueryForm url={this.props.url} ref='queryForm'/>
      </div>
    );
  }
});

module.exports = FormPanel;
