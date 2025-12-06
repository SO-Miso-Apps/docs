---
id: metafield-manager
title: Metafield Manager - Custom Data Management
sidebar_label: Metafield Manager
---

# Metafield Manager - Custom Data Management

Similar to Smart Tagger, but used to automatically populate **Metafields** for Products or Customers.

## Practical Applications:

  * Automatically set washing instructions (`care.instructions`) if a product is tagged with "Silk".
  * Automatically mark a customer as "Gold" tier in a metafield if their total spend exceeds $1000.

## How to use:

1.  Go to the **Metafield Manager** menu \> **Create Rule**.
2.  Set up conditions similar to Smart Tagger.
3.  **Metafield Definition:**
      * **Namespace & Key:** The identifier for the metafield (e.g., `custom.material`).
      * **Value Type:** Select the data type (Single Line Text, Integer, Decimal, JSON).
      * **Value:** The value to be populated.
4.  Click **Save Rule**.

---

## Use Case

### Automated Product Information Display

**Problem:** You sell clothing and want to display specific "Care Instructions" for each fabric type on the product page (Storefront), but manual entry for thousands of products is tedious.

**Solution:**
  * **Setup:** Create a rule for **Products**.
  * **Condition:** `Tags` **contains** `Silk`.
  * **Action:**
      * Namespace & Key: `my_fields.care_guide`.
      * Value: *"Dry clean only, do not bleach, iron low heat"*.
  * **Result:** Any new product tagged "Silk" will automatically have these instructions populated, ready to be displayed on your website (requires theme support for metafields).
