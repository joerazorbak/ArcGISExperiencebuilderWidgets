import React from 'react';
import { type AllWidgetProps } from 'jimu-core';
import { type IMConfig } from '../config';
import './Widget.css'; // Import the CSS file

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const { user } = props;

  return (
    <div className="widget-demo jimu-widget m-2">
      <h2 className="user-info-header">User Information</h2>
      {user ? (
        <div className="user-info-report">
          <table className="user-info-table">
            <tbody>
              <tr><th>Username</th><td>{user.username}</td></tr>
              <tr><th>Full Name</th><td>{user.fullName}</td></tr>
              <tr><th>Email</th><td>{user.email}</td></tr>
              <tr><th>Access</th><td>{user.access}</td></tr>
              <tr><th>App ID</th><td>{user.appInfo.appId}</td></tr>
              <tr><th>Item ID</th><td>{user.appInfo.itemId}</td></tr>
              <tr><th>App Owner</th><td>{user.appInfo.appOwner}</td></tr>
              <tr><th>Org ID</th><td>{user.appInfo.orgId}</td></tr>
              <tr><th>App Title</th><td>{user.appInfo.appTitle}</td></tr>
              <tr><th>Created</th><td>{new Date(user.created).toLocaleString()}</td></tr>
              <tr><th>Culture</th><td>{user.culture}</td></tr>
              <tr><th>Culture Format</th><td>{user.cultureFormat}</td></tr>
              <tr><th>Email Status</th><td>{user.emailStatus}</td></tr>
              <tr><th>Email Status Date</th><td>{new Date(user.emailStatusDate).toLocaleString()}</td></tr>
              <tr><th>Favorite Group ID</th><td>{user.favGroupId}</td></tr>
              <tr><th>First Name</th><td>{user.firstName}</td></tr>
              <tr><th>Last Name</th><td>{user.lastName}</td></tr>
              <tr><th>Last Login</th><td>{new Date(user.lastLogin).toLocaleString()}</td></tr>
              <tr><th>Level</th><td>{user.level}</td></tr>
              <tr><th>MFA Enabled</th><td>{user.mfaEnabled ? "Yes" : "No"}</td></tr>
              <tr><th>MFA Enforcement Exempt</th><td>{user.mfaEnforcementExempt ? "Yes" : "No"}</td></tr>
              <tr><th>Modified</th><td>{new Date(user.modified).toLocaleString()}</td></tr>
              <tr><th>Preferred View</th><td>{user.preferredView}</td></tr>
              <tr><th>Provider</th><td>{user.provider}</td></tr>
              <tr><th>Region</th><td>{user.region}</td></tr>
              <tr><th>Role</th><td>{user.role}</td></tr>
              <tr><th>Storage Quota</th><td>{user.storageQuota}</td></tr>
              <tr><th>Storage Usage</th><td>{user.storageUsage}</td></tr>
              <tr><th>Units</th><td>{user.units}</td></tr>
              <tr><th>User License Type ID</th><td>{user.userLicenseTypeId}</td></tr>
              <tr><th>User Type</th><td>{user.userType}</td></tr>
              {/* Add more properties if needed */}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
}

export default Widget;
