import React,{Component} from 'react';
import 'antd/dist/antd.less';
import style from './style.scss';

import Header from './components/header/Header';
import Main from './components/content/Main';
import Footer from './components/Footer/Footer';
import {connect} from 'react-redux';

import { Layout, Row, Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import routes from './routes.js';

class App extends Component {
	showContentMenu = (routes)=>{
		var result = null;
        if(routes.length > 0){
            result = routes.map((ele,index)=>{
                return <Route
                        key={index}
                        path={ele.path}
                        exact = {ele.exact}
                        component={ele.main}
                    >

                </Route>
            })
        }
        return result;
	}
	render() {
		return (
			<Spin indicator={antIcon} spinning={this.props.load.loading}>
				<Router>
					<Layout >
						<Row className={style.wrapper}>
							<Header></Header>
								{this.showContentMenu(routes)}
						</Row>
						<Footer style={{ paddingTop: 30 }} />
					</Layout>
				</Router>
			</Spin>
	
		);
	}	
}
const mapStateToProps = state =>{
	return {
		load : state.load
	}
}

export default connect(mapStateToProps,null) (App);
