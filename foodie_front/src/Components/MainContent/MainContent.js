import React, { Component } from "react";
import "./MainContent.css";
import Grid from "@mui/material/Grid";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";

import Suggestions from "../Suggestions/Suggestions";
import { Col, Row } from "antd";
import GroupsListView from "../../Groups/GroupsListView";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col span={15}>
          <div style={{ backgroundColor: "red", margin: "64px" }}>
            <MainPage />
          </div>
        </Col>
        <Col span={2} />
        <Col span={7}>
          <GroupsListView />
        </Col>
      </Row>
    );
  }
}

export default MainContent;
