import React from 'react';
import { Form, Input, Layout, Button, Col, Row } from 'antd';
import './App.css';
import { PlusOutlined } from '@ant-design/icons';
import ListItem from './list/ListItem';


const {Header, Content} = Layout;

type mystate ={
  items:{text:string,key:string}[],
  currentItem:{
    text:string,
    key:string
  }
}
class App extends React.Component<{}, mystate >{

  constructor(props:any){
    super(props);
    this.state= {
    items:[],
      currentItem:{
        text:"",
        key:""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.delteItem = this.delteItem.bind(this);
  } 

  handleInput(e:any){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now().toString()
      }
    })
  }
  addItem(e:any){
    // e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems= [...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:""
        }
      })
    }
  }
  delteItem(key:any){
     const filtered = this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filtered
      })
  }
  render(){
    const buttonItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 }
    };
    return (  
      <div className = 'w-1/3 m-48'>
          <Layout>
            <Header className = 'header'>
              <h1 className='text-white'>Todo List</h1>
            </Header>
            <Content>
              <Form
              layout='inline'
              onFinish ={this.addItem} 
              >
                <Row>
                  <Col>
                    <Form.Item >
                    <Input placeholder = "Add item" style={{ width: 300 }}
                    value = {this.state.currentItem.text}
                    onChange={this.handleInput}></Input>
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item  {...buttonItemLayout}>
                      <Button type ="primary" shape="circle" icon={<PlusOutlined />} htmlType="submit"/>
                    </Form.Item>
                  </Col>
                </Row>  
              </Form>
              <ListItem items={this.state.items}
              deleteItem = {this.delteItem}></ListItem>
            </Content>
          </Layout>
           
      </div>
    );
  }
  
}

export default App;
