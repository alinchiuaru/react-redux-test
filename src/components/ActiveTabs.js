import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

function renderTabs (tabs) {
    return tabs.map((tab) => {
        return (
            <Tab
                key={`_${tab.value}_`}
                label={tab.value.toUpperCase()}
                value={tab.value}
                icon={tab.icon}
            />
        );
    });
}

const ActiveTabs = (props) => (
    <Tabs
        value={props.value}
        onChange={props.onChange}
    >
        { renderTabs(props.tabs) }
    </Tabs>
);

export default ActiveTabs;