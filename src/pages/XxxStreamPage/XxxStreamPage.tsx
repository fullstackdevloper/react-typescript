import * as React from "react";
import sharedStyles from "../../assets/styles/XxxSharedStyles.module.scss";
import { App as SendbirdLiveApp } from "@sendbird/live-uikit-react";

class XxxStreamPage extends React.Component {
  render() {
    return (
      <div className={sharedStyles.page}>
        <div className={sharedStyles.pageTitle}>Stream View Page</div>
        <div className={sharedStyles.mainCard}>
          <p>This is Stream View Page.</p>
          <div className={sharedStyles.App}>
            <SendbirdLiveApp
                // Add the two lines below.
                appId={'A5265267-3D06-4FD6-9A25-26E3C0106390'}     // Specify your Sendbird application ID.
                userId={'678529'}        // Specify your user ID.
                accessToken={'94a90a1a0f366929ddcb891fb0cfa88216ec2689'}        
            />
        </div>
        </div>
      </div>
    );
  }
}

export default XxxStreamPage;
