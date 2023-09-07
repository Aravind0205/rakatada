import React, from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PrepareDataComponent from "../components/learn/PrepareDataComponent";
import AfterBloodDonation from "../components/learn/AfterBloodDonation";
import DonationDayComponent from "../components/learn/DonationDayComponent";

const Learn = () => {
    return (
        <div className="container mt-5">
            <div className="mt-5">
                <Tabs>
                    <TabList>
                        <Tab>Preparing for Donation</Tab>
                        <Tab>Donation Day</Tab>
                        <Tab>After your Donation</Tab>
                    </TabList>
                    <TabPanel>
                        <PrepareDataComponent/>
                    </TabPanel>
                    <TabPanel>
                        <DonationDayComponent/>
                    </TabPanel>
                    <TabPanel>
                        <AfterBloodDonation/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Learn;
