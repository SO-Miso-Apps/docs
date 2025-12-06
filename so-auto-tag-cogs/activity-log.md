---
id: activity-log
title: Activity Log & Revert
sidebar_label: Activity Log
---

# Activity Log & Revert

Every automated action performed by **SO: Auto Tag & COGS** is logged for your review.

---

## Features

### Status Monitoring
See all running and completed tasks including:
- Webhook processing (Orders, Customers, Products)
- Bulk Operations progress
- Data Cleaning jobs
- COGS updates

### Activity Categories

Filter logs by category using the tabs:

| Category | Actions Logged |
|----------|----------------|
| **All** | All activities |
| **Tags** | Smart Tag Applied, Tag Cleanup, Bulk Tag Update |
| **Bulk Operations** | Bulk Operation, Bulk Tag Update |
| **Metafields** | Metafield Updated, Metafield Created, COGS Updated |
| **Data Cleaning** | Tag Cleanup, Data Cleanup |
| **System** | Webhook Received, Job Queued, Job Completed |

### Status Indicators

| Status | Meaning |
|--------|---------|
| 🟢 **Success** | Action completed successfully |
| 🟡 **Pending** | Action is queued or in progress |
| 🔴 **Failed** | Action encountered an error |

### Details View
Click on any log entry to see:
- Which rule was triggered
- What data was changed
- Timestamp history
- Error messages (if failed)

---

## Date Range Filter

Filter logs by time period:
- Today
- Last 7 Days
- Last 30 Days
- Custom Range

---

## Revert Feature (Pro Plan Only)

If you accidentally run a Bulk Operation by mistake, you can undo it:

1. Find the bulk operation in the Activity Log.
2. Click the **Revert** button next to that entry.
3. Confirm the revert action.
4. The system will restore the original tags.

> ⚠️ **Note:** Revert is only available for bulk operations, not for individual webhook-triggered changes.

---

## Use Case

### Debugging Why a Rule Didn't Fire

**Problem:** You created a rule but it doesn't seem to be working on new orders.

**Solution:**
1. Go to **Activity Log**.
2. Filter by **Tags** or **System** category.
3. Look for webhook events related to your orders.
4. Check the **Details** to see if:
   - The webhook was received
   - The rule was evaluated
   - Any errors occurred

**Common issues:**
- Rule is disabled
- Conditions don't match the order data
- Webhook failed to process (check for Failed status)

---

## FAQs

**How long are activity logs retained?**
Activity logs are kept for 30 days. After that, older logs are automatically cleaned up.

**Can I export the activity logs?**
Currently, activity logs cannot be exported. You can view them in the app interface.

**Why does a log show "Failed" status?**
Common reasons include:
- Shopify API rate limits
- Invalid data in the resource
- Rule configuration errors
- Network connectivity issues

Check the **Details** for specific error messages.

**Can I retry a failed operation?**
Failed webhook operations are automatically retried by the system. For bulk operations, you may need to run them again manually.
