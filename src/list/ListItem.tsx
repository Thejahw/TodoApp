import React from 'react';
import { Button, Row, Col, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function onChange(e:any) {
    console.log(`checked = ${e.target.checked}`);
}

function ListItem(props:any){
 
    const items = props.items;
    const buttonItemLayout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 }
      };
    const listItems = items.map((item: { key: string ; text: React.ReactNode; } ) =>
        {return <div className ="bg-blue-500 p-1" key ={item.key}>
            <Row>
                <Col span={16}>
                    <h3><Checkbox onChange={onChange}>
                        {item.text}
                    </Checkbox></h3> 
                </Col>
                <Col {...buttonItemLayout}>
                    <Button type ="primary" shape="circle" 
                    icon={<DeleteOutlined />}
                    onClick={() =>props.deleteItem(item.key)}></Button>
                </Col>
            </Row>          
        </div>});
    return(<div>{listItems}</div>)
    

}

export default ListItem;