---
title: "Admin Dashboard"
description: "Monitor user activities and system-wide actions from the Admin Dashboard, providing a comprehensive audit trail."
sidebar:
  order: 2
---

The Admin Dashboard provides a powerful, centralized view for monitoring all user activities within the system. It serves as a comprehensive audit log, allowing administrators and owners to track actions performed on any record.

:::caution[Feature Availability]
The Admin Dashboard is exclusively available on the **Professional** and **Enterprise** tiers for users with **Admin** or **Owner** roles.
:::

## User Activities Log

The primary feature of the Admin Dashboard is the **User Activities** log. This detailed table provides a chronological record of all significant actions taken by users across the platform.

The log includes the following columns:

| Column      | Description                                                              |
| :---------- | :----------------------------------------------------------------------- |
| **User**    | The name of the user who performed the action.                           |
| **Activity**| The type of action performed (e.g., Read, Create, Update, Delete).       |
| **Record Type** | The type of record that was affected (e.g., Company, Lead, Claim).   |
| **Record**  | A link to the specific record that was accessed or modified.             |
| **IP Address**  | The IP address from which the user performed the action.             |
| **Date**    | The exact date and time the activity occurred.                           |

## Filtering and Exporting

To help you find specific information quickly, the User Activities log includes robust filtering options and an export feature.

### Filtering Activities

You can apply filters to narrow down the activity log based on:
- **Users:** Select one or more users to see only their activities.
- **Record Type:** Filter the log to show actions on specific record types, like `Claim` or `Lead`.
- **Date Range:** Use the date picker to view activities within a specific time frame.

After setting your criteria, click the **Apply Filters** button to update the list.

### Export to Excel

For external reporting, auditing, or analysis, you can export the currently filtered view of the activity log to an Excel spreadsheet by clicking the **Export to Excel** button.