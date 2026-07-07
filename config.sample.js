/* Inventory Portal — external configuration
   ------------------------------------------
   Rename this file to config.js and host it NEXT TO index.html.
   The portal loads it automatically; if present, it overrides the
   inline CONFIG block. This means future portal updates (replacing
   index.html) can NEVER wipe your tenant settings or manager list.

   None of these values are secrets — safe in a public repo. */

window.PORTAL_CONFIG = {
  // Entra ID → App registrations → Inventory Portal → Overview
  tenantId: "YOUR-TENANT-ID-HERE",
  clientId: "YOUR-CLIENT-ID-HERE",

  // Full URL to the workbook in SharePoint (must end in .xlsx)
  workbookUrl: "https://YOURCOMPANY.sharepoint.com/sites/YOURSITE/Shared%20Documents/Inventory_Control_Workbook.xlsx",

  // Accounts (sign-in emails/UPNs) that get manager tools:
  // request lifecycle actions, item editing, request→SKU conversion.
  managers: [
    "bblessinger@denvercutlery.com"
  ]
};
