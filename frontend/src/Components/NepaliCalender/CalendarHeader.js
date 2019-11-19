import React from 'react';
import {Button} from "antd";
const CalendarHeaderView = ({month, year, ...props}) => (
    <div className="calendar-header-view">
       <Button onClick={props.onClickPrevious} className="left" htmlType={"button"}> &lt; </Button> {month} {year} <Button className="right" htmlType={"button"} onClick={props.onClickNext}> &gt; </Button>
    </div>
);

export default CalendarHeaderView;