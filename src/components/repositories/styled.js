import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTab = styled(Tab)`
    border-radius: 16px 16px 0 0;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;

    &.focus {
        outline: none;
    }

    &.is-selected {
        border:none;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white;
        box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.5);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabs = styled(Tabs)`
    font-size: 1.1rem;
    width: 100%;
`;
WrapperTabs.tabsRole = 'TabList';

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display:flex;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)`
    border: 1px solid "#ccc";
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    padding: 16px;
    display: none;
    margin: -5px 0 0 4px;

    &.is-selected {
        display:block;
    }
`;
WrapperTabPanel.tabsRole = 'TabPanel';