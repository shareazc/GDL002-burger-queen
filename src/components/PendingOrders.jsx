import React from "react";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
import { Layout } from "./Layout";

export const PendingOrders = () => (
        <div>
            <NavigationBarWaiter />
            <WaiterTabs />
            <Layout>
            <h2>Pending Orders</h2>
            </Layout>
        </div>
    )