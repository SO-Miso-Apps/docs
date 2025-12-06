id: bulk-operations
title: Bulk Operations
sidebar_label: Bulk Operations
sidebar_position: 5
---

# Bulk Operations

A powerful tool for editing data in bulk for Products, Customers, or Orders.

## Supported Operations:

1.  **Find & Replace:** Find an old tag and replace it with a new one (e.g., change `Summer-2023` to `Clearance`).
2.  **Add Tag:** Add a new tag to a large set of resources.
3.  **Remove Tag:** Remove a specific tag from all resources.

## Safe Workflow:

1.  Select the operation and enter the tags.
2.  Click **Preview Operation**: The system will scan and show you how many items will be affected.
3.  Confirm to run the background job.

---

## Use Case

### Post-Campaign Data Cleanup

**Problem:** After a Black Friday sale, thousands of products are still tagged with `BlackFriday-2024` and `Sale-Off`. You want to remove them quickly to prepare for new inventory.

**Solution:**
  * Select **Remove Tag**, enter `BlackFriday-2024`, and run for all products.
  * Use **Preview** first to confirm the number of affected items.
  * The background job will process all products automatically.

---

## FAQ

**Is it safe to run a Bulk Operation?**
Yes, but we recommend running a **Preview** first. The system will show you exactly how many items will be affected. If you are on the Pro plan, a backup is created automatically, allowing you to revert changes if needed.
