---
id: smart-tagger
title: Smart Tagger - Tag Automation
sidebar_label: Smart Tagger
---

# Smart Tagger - Tag Automation

This feature allows you to automatically tag **Orders**, **Customers**, and **Products** based on specific conditions in real-time as new events occur.

## How to create a new rule:

1.  Go to the **Smart Tags** menu \> Click **Create Rule**.
2.  **AI Magic Generator:** You can type a description in English (e.g., *"Tag orders over $500 as VIP"*), and the AI will automatically fill in the configuration for you.
3.  **Manual Setup:**
      * **Rule Name:** Enter a memorable name.
      * **Resource:** Choose **Orders**, **Customers**, or **Products**.
      * **Conditions:** Select a data field and a comparison operator (Greater than, Contains, Equals).
          * *Logic:* Select "All rules pass" (AND) or "Any rule passes" (OR).
      * **Tags:** Enter the tags to be applied (e.g., `VIP`, `High-Value`).
4.  **Advanced Settings:**
      * *Reset on Mismatch:* If enabled, the system will **REMOVE** the tag if the resource no longer meets the conditions.
5.  Click **Save**.

---

## Available Conditions by Resource

### Orders
| Field | Description |
|-------|-------------|
| Total Price | Order total amount |
| Subtotal Price | Order subtotal (before shipping/tax) |
| Gateway / Payment Method | Payment gateway used (e.g., Shopify Payments, PayPal) |
| Financial Status | Payment status (paid, pending, refunded, etc.) |
| Currency | Order currency code (USD, EUR, etc.) |
| Total Weight | Combined weight of all items |
| Shipping Method | Selected shipping service name |
| Shipping City | Customer's shipping city |
| Shipping Country | Country code (US, CA, VN, etc.) |
| Shipping Province | State/province code |
| Shipping ZIP | Postal/ZIP code |
| Risk Level | Shopify's fraud risk assessment (Low, Medium, High) |
| Tags | Existing tags on the order |

### Customers
| Field | Description |
|-------|-------------|
| Total Spent | Lifetime spending amount |
| Orders Count | Number of orders placed |
| Country | Customer's country code |
| State/Province | Customer's state/province |
| Email | Customer's email address |
| Tags | Existing tags on the customer |

### Products
| Field | Description |
|-------|-------------|
| Title | Product title |
| Product Type | Product type category |
| Vendor | Product vendor/brand |
| Tags | Existing product tags |
| Price | First variant's price |
| Inventory Quantity | First variant's stock level |
| Status | Product status (active, draft, archived) |

---

## Rule Library & Templates

The **Library** tab provides pre-built templates for common use cases:

### How to use templates:
1. Click the **Library** tab on the Smart Tagger page.
2. Browse available templates by category.
3. Click **Import** on the template you want.
4. Review and customize the imported rule.
5. Click **Save** to activate.

### Popular templates include:
- VIP Customer Tagging
- High-Risk Order Alerts
- Low Stock Warnings
- International Shipping Labels
- Seasonal Sale Tags

💡 **Tip:** After importing a template, you can modify the conditions and tags to match your specific needs.

---

## Export & Import Rules

### Export Rules
1. Click the **Export** button on the Smart Tagger page.
2. A JSON file containing all your rules will be downloaded.
3. Use this for backup or to transfer rules between stores.

### Import Rules
1. Click the **Import** button.
2. Select a JSON file containing rules.
3. Imported rules are **disabled by default** – review and enable them manually.

---

## Use Cases

### Customer Segmentation & Engagement

**Problem:** You want to identify high-spending customers to send special discount codes or provide VIP care, but manual filtering takes too much time.

**Solution:**
  * **Setup:** Create a rule for **Customers**.
  * **Condition:** `Total Spent` \> `500` (or your currency equivalent).
  * **Action:** Apply tags `VIP` and `Gold-Member`.
  * **Result:** As soon as a customer reaches this spending threshold, they are automatically tagged. You can use these tags to create Customer Segments in Shopify Admin for email marketing campaigns.

### High-Risk & International Order Alerts

**Problem:** International orders require different packing procedures, or high-value orders need identity verification before shipping to avoid fraud.

**Solution:**
  * **Scenario 1 (International):**
      * Condition: `Shipping Country Code` **is not** `US` (or your home country).
      * Action: Apply tag `International-Shipping`.
  * **Scenario 2 (High Risk):**
      * Condition: `Risk Level` **equals** `High` OR `Total Price` \> `1000`.
      * Action: Apply tag `Verify-Payment`.
  * **Benefit:** Warehouse staff can see the tag immediately and know special handling is required without checking every order detail.

### Low Stock Alerts

**Problem:** You want to automatically identify products running low on inventory to reorder or pause advertising.

**Solution:**
  * **Setup:** Create a rule for **Products**.
  * **Condition:** `Inventory Quantity` \< `10`.
  * **Action:** Apply tag `Low-Stock`.
  * **Result:** Products with low inventory are tagged automatically, making them easy to filter in Shopify Admin.

---

## FAQs

**Why didn't my Smart Tag rule apply to an old order?**
Smart Tagger rules are triggered by **webhooks** (real-time events) such as "Order Created" or "Order Updated". They do not automatically scan past data. To tag old orders, please use the **Bulk Operations** tool.

**What does "Reset on Mismatch" mean?**
If you enable this setting in a rule, the system will actively **remove** the tag from an order or customer if they no longer meet the rule's conditions (e.g., if an order is refunded and the total price drops below your VIP threshold).

**How does the "AI Magic Generator" work?**
The AI generator uses Google Gemini to translate your natural language description (e.g., "Tag orders from Canada over $100") into a structured rule configuration. It fills in the conditions and actions for you, but you should always review them before saving.

**How quickly are rules applied after an order is placed?**
Webhooks are generally processed within seconds. However, during high-traffic periods on Shopify, there might be a slight delay. You can check the **Activity Log** to see the exact time a rule was executed.

**Can I have multiple rules that add the same tag?**
Yes, but be aware of rule priority. Rules are processed in order of priority (highest first). If a higher-priority rule already made a decision about a tag, lower-priority rules cannot override it.

**What's the difference between "All rules pass" and "Any rule passes"?**
- **All rules pass (AND):** ALL conditions must be true for the tag to be applied.
- **Any rule passes (OR):** At least ONE condition must be true for the tag to be applied.
