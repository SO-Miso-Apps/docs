---
id: index
title: User Guide
sidebar_label: User Guide
---

# 📘 SO: Auto Tag & COGS User Guide

Welcome to **SO: Auto Tag & COGS** – The all-in-one operations solution to help you automate workflows, manage data, and optimize profits on Shopify.

## Table of Contents

1.  Dashboard & AI Advisor Overview
2.  Smart Tagger - Tag Automation
3.  Metafield Manager - Custom Data Management
4.  COGS & Profit Tracking
5.  Bulk Operations
6.  Data Cleaner
7.  Activity Log & Revert
8.  Real-world Use Cases

-----

## 1\. Dashboard & AI Advisor

Upon opening the app, the **Dashboard** provides an overview of your store's operational health.

  * **Quick Stats:** View total orders, products, active rules, and hours saved through automation.
  * **AI Insights:** The system automatically analyzes your data and provides actionable suggestions, such as:
      * *Low Inventory Alert:* Suggests creating a rule to tag products running low on stock.
      * *High-Value Customers Found:* If there are many high-value orders (e.g., \> $1000), AI suggests creating a rule to tag VIP customers.
      * *Missing Product Costs:* Alerts if products are missing Cost of Goods Sold (COGS) data.
  * **Activity Trend:** Monitor data processing trends over the last 7 days.

-----

## 2\. Smart Tagger - Tag Automation

This feature allows you to automatically tag **Orders** and **Customers** based on specific conditions in real-time as new events occur.

### How to create a new rule:

1.  Go to the **Smart Tags** menu \> Click **Create Rule**.
2.  **AI Magic Generator:** You can type a description in English (e.g., *"Tag orders over $500 as VIP"*), and the AI will automatically fill in the configuration for you.
3.  **Manual Setup:**
      * **Rule Name:** Enter a memorable name.
      * **Resource:** Choose **Orders** or **Customers**.
      * **Conditions:** Select a data field (e.g., Total Price, Country, Order Count) and a comparison operator (Greater than, Contains, Equals).
          * *Logic:* Select "All rules pass" (AND) or "Any rule passes" (OR).
      * **Tags:** Enter the tags to be applied (e.g., `VIP`, `High-Value`).
4.  **Advanced Settings:**
      * *Reset on Mismatch:* If enabled, the system will **REMOVE** the tag if the order/customer no longer meets the conditions.
5.  Click **Save**.

💡 **Tip:** Use the **Library** tab to import common pre-built rule templates instead of setting them up from scratch.

-----

## 3\. Metafield Manager - Custom Data Management

Similar to Smart Tagger, but used to automatically populate **Metafields** for Products or Customers.

### Practical Applications:

  * Automatically set washing instructions (`care.instructions`) if a product is tagged with "Silk".
  * Automatically mark a customer as "Gold" tier in a metafield if their total spend exceeds $1000.

### How to use:

1.  Go to the **Metafield Manager** menu \> **Create Rule**.
2.  Set up conditions similar to Smart Tagger.
3.  **Metafield Definition:**
      * **Namespace & Key:** The identifier for the metafield (e.g., `custom.material`).
      * **Value Type:** Select the data type (Single Line Text, Integer, Decimal, JSON).
      * **Value:** The value to be populated.
4.  Click **Save Rule**.

-----

## 4\. COGS & Profit Tracking

Track profits accurately by entering the **Cost of Goods Sold (COGS)** for your products.

### Key Features:

  * **List View:** Displays Price, Cost, and Margin for each variant.
  * **Quick Update:** Enter the cost directly into the "Cost" field in the list.
  * **Smart Bulk Apply:**
      * Click the **Smart Bulk Apply** button.
      * Select an option name (e.g., Size).
      * Select a value (e.g., XL).
      * Enter the cost.
      * *Result:* All XL size variants across visible products will be updated with the cost at once.
  * **Alerts:** The system highlights products with low margins (\< 20%) or where cost is higher than price.

-----

## 5\. Bulk Operations

A powerful tool for editing data in bulk for Products, Customers, or Orders.

### Supported Operations:

1.  **Find & Replace:** Find an old tag and replace it with a new one (e.g., change `Summer-2023` to `Clearance`).
2.  **Add Tag:** Add a new tag to a large set of resources.
3.  **Remove Tag:** Remove a specific tag from all resources.

### Safe Workflow:

1.  Select the operation and enter the tags.
2.  Click **Preview Operation**: The system will scan and show you how many items will be affected.
3.  Confirm to run the background job.

-----

## 6\. Data Cleaner

Keep your store data clean by removing junk or duplicate tags.

### AI Deep Scan Feature:

1.  Click **Start Deep Scan**. The system will scan all products and customers.
2.  **Duplicate Detection:** Finds tags that are identical but have different casing (e.g., `sale` vs `Sale`). You can choose to clean/merge them.
3.  **Malformed Tags:** Identifies tags containing special characters or that are excessively long.
4.  Select the tags you want to process and click **Clean** to remove or standardize them.

-----

## 7\. Activity Log & Revert

Every automated action performed by **SO: Auto Tag & COGS** is logged for your review.

  * **Status Monitoring:** See running tasks (Webhooks, Bulk Jobs), and check for success or failure.
  * **Details:** View exactly which rule was triggered and what data was changed.
  * **Revert Feature (Pro Plan Only):**
      * If you accidentally run a Bulk Operation by mistake, you can click the **Revert** button next to that activity log.
      * The system will restore the tag data to its state before the operation was performed.

-----

## 8\. Real-world Use Cases

Here are some common scenarios that merchants face and how to solve them using **SO: Auto Tag & COGS**.

### 1\. Customer Segmentation & Engagement

**Problem:** You want to identify high-spending customers to send special discount codes or provide VIP care, but manual filtering takes too much time.

**Solution:** Use **Smart Tagger**.

  * **Setup:** Create a rule for **Customers**.
  * **Condition:** `Total Spent` \> `500` (or your currency equivalent).
  * **Action:** Apply tags `VIP` and `Gold-Member`.
  * **Result:** As soon as a customer reaches this spending threshold, they are automatically tagged. You can use these tags to create Customer Segments in Shopify Admin for email marketing campaigns.

### 2\. High-Risk & International Order Alerts

**Problem:** International orders require different packing procedures, or high-value orders need identity verification before shipping to avoid fraud.

**Solution:** Use **Smart Tagger**.

  * **Scenario 1 (International):**
      * Condition: `Shipping Country Code` **is not** `US` (or your home country).
      * Action: Apply tag `International-Shipping`.
  * **Scenario 2 (High Risk):**
      * Condition: `Risk Level` **equals** `High` OR `Total Price` \> `1000`.
      * Action: Apply tag `Verify-Payment`.
  * **Benefit:** Warehouse staff can see the tag immediately and know special handling is required without checking every order detail.

### 3\. Automated Product Information Display (Metafields)

**Problem:** You sell clothing and want to display specific "Care Instructions" for each fabric type on the product page (Storefront), but manual entry for thousands of products is tedious.

**Solution:** Use **Metafield Manager**.

  * **Setup:** Create a rule for **Products**.
  * **Condition:** `Tags` **contains** `Silk`.
  * **Action:**
      * Namespace & Key: `my_fields.care_guide`.
      * Value: *"Dry clean only, do not bleach, iron low heat"*.
  * **Result:** Any new product tagged "Silk" will automatically have these instructions populated, ready to be displayed on your website (requires theme support for metafields).

### 4\. Profit Monitoring & Loss Prevention

**Problem:** You are running ads but aren't sure which products are selling at a loss or with thin margins after accounting for COGS.

**Solution:** Use **COGS & Profit Tracking**.

  * **Step 1:** Enter costs for all products using **Smart Bulk Apply** (e.g., apply $10 cost to all Size M T-shirts).
  * **Step 2:** Monitor the **Margin** column.
  * **Step 3:** Filter for products with Margin \< 15%.
  * **Action:** The system will highlight these in red. You can decide to increase prices or stop ads for these products to prevent losses.

### 5\. Post-Campaign Data Cleanup

**Problem:** After a Black Friday sale, thousands of products are still tagged with `BlackFriday-2024` and `Sale-Off`. You want to remove them quickly to prepare for new inventory.

**Solution:** Use **Bulk Operations** and **Data Cleaner**.

  * **Method 1 (Bulk Operations):** Select **Remove Tag**, enter `BlackFriday-2024`, and run for all products.
  * **Method 2 (Data Cleaner):** Scan your entire store. If staff entered inconsistent tags like `sale-off` (lowercase) and `Sale-Off` (capitalized), the tool will detect them as duplicates and allow you to merge them into a single standard tag.


## 9\. FAQs

### **Billing & Plans**

**1. What happens if I reach the rule limit on the Free plan?**
You will not be able to create new rules or enable existing ones if the count exceeds 5 for Smart Tagger or 5 for Metafield Manager. To add more, you must either delete/disable existing rules or upgrade to the **Basic** or **Pro** plan.

**2. Can I use the "Revert" feature on all plans?**
No, the **Revert** feature (which undoes bulk operations) is exclusive to the **Pro** and **Pro Annual** plans. On Free or Basic plans, bulk operations cannot be undone automatically.

### **Smart Tagger & Automation**

**3. Why didn't my Smart Tag rule apply to an old order?**
Smart Tagger rules are triggered by **webhooks** (real-time events) such as "Order Created" or "Order Updated". They do not automatically scan past data. To tag old orders, please use the **Bulk Operations** tool.

**4. What does "Reset on Mismatch" mean?**
If you enable this setting in a rule, the system will actively **remove** the tag from an order or customer if they no longer meet the rule's conditions (e.g., if an order is refunded and the total price drops below your VIP threshold).

**5. How does the "AI Magic Generator" work?**
The AI generator uses Google Gemini to translate your natural language description (e.g., "Tag orders from Canada over $100") into a structured rule configuration. It fills in the conditions and actions for you, but you should always review them before saving.

### **COGS & Profit**

**6. Does the app sync COGS with Shopify's native "Cost per item" field?**
Yes, the app reads and updates the `inventoryItem`'s `unitCost` field directly via the Shopify API. This means the data is consistent with what you see in Shopify admin.

**7. Can I update costs for multiple variants at once?**
Yes, you can use the **Smart Bulk Apply** feature in the COGS section. It allows you to set a cost for all variants that match a specific option value (e.g., set cost to $5 for all "Small" variants).

### **Data Management**

**8. Is it safe to run a Bulk Operation?**
Yes, but we recommend running a **Preview** first. The system will show you exactly how many items will be affected. If you are on the Pro plan, a backup is created automatically, allowing you to revert changes if needed.

**9. What does the "Data Cleaner" detect?**
The Data Cleaner scans for two main issues:
1.  **Duplicate Tags:** Tags that are effectively the same but differ in casing (e.g., "summer" vs. "Summer").
2.  **Malformed Tags:** Tags that are excessively long (>255 chars) or contain invalid special characters.

**10. How quickly are rules applied after an order is placed?**
Webhooks are generally processed within seconds. However, during high-traffic periods on Shopify, there might be a slight delay. You can check the **Activity Log** to see the exact time a rule was executed.