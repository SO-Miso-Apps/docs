---
id: cogs
title: COGS & Profit Tracking
sidebar_label: COGS & Profit
---

# COGS & Profit Tracking

Track profits accurately by entering the **Cost of Goods Sold (COGS)** for your products.

---

## Global Statistics

At the top of the COGS page, view real-time statistics:
- **Total Products** in your store
- **Products with Costs** already entered
- **Average Margin** across all products
- **Low Margin Products** count (margin < 20%)

---

## Product List

### List View
Displays Price, Cost, and Margin for each product variant in a table format.

### Search & Filter
- Use the **search bar** to find products by title or SKU.
- Filter by margin status (All, Low Margin, Missing Cost).

### Pagination
Navigate through your product catalog with **Previous** and **Next** buttons. Products are loaded in batches for performance.

---

## Entering Costs

### Quick Update
Click directly into the "Cost" field for any variant and type the cost. Changes are tracked and can be saved in batch.

### Smart Bulk Apply
Apply the same cost to multiple variants at once:
1. Click the **Smart Bulk Apply** button.
2. Select an option name (e.g., Size, Color).
3. Select a value (e.g., XL, Blue).
4. Enter the cost.
5. Click **Apply**.

*Result:* All matching variants across visible products will be updated with the cost at once.

---

## Alerts & Indicators

The system highlights products that need attention:
- 🔴 **Red:** Margin < 0% (selling at a loss)
- 🟡 **Yellow:** Margin < 20% (low margin)
- ⚪ **Gray:** Missing cost data

---

## Use Case

### Profit Monitoring & Loss Prevention

**Problem:** You are running ads but aren't sure which products are selling at a loss or with thin margins after accounting for COGS.

**Solution:**
  * **Step 1:** Enter costs for all products using **Smart Bulk Apply** (e.g., apply $10 cost to all Size M T-shirts).
  * **Step 2:** Monitor the **Margin** column.
  * **Step 3:** Filter for products with Margin < 15%.
  * **Action:** The system will highlight these in red. You can decide to increase prices or stop ads for these products to prevent losses.

---

## FAQs

**Does the app sync COGS with Shopify's native "Cost per item" field?**
Yes, the app reads and updates the `inventoryItem`'s `unitCost` field directly via the Shopify API. This means the data is consistent with what you see in Shopify admin.

**Can I update costs for multiple variants at once?**
Yes, you can use the **Smart Bulk Apply** feature in the COGS section. It allows you to set a cost for all variants that match a specific option value (e.g., set cost to $5 for all "Small" variants).
