/* Inventory Portal — external configuration
   ------------------------------------------
   Rename this file to config.js and host it NEXT TO index.html.
   The portal loads it automatically; if present, it overrides the
   inline CONFIG block. This means future portal updates (replacing
   index.html) can NEVER wipe your tenant settings or manager list.

   None of these values are secrets — safe in a public repo. */

window.PORTAL_CONFIG = {
  // Entra ID → App registrations → Inventory Portal → Overview
  tenantId:    "ebeab771-6b6f-413b-a0ce-a9e2bb16d7cc",        // Entra ID → Overview → Directory (tenant) ID
  clientId:    "26bd9358-873c-4d1f-9a6f-b58d241ef996",        // App registration → Application (client) ID
  
   // Full URL to the workbook in SharePoint (must end in .xlsx)
   workbookUrl: "https://denvercutlery.sharepoint.com/:x:/s/DenverCutlery/IQAtlep2kq08SrnO01E771HeAbCDF8B6x7vaK6WxdZZxM_0?e=e7bGPn"

  // Accounts (sign-in emails/UPNs) that get manager tools:
  // request lifecycle actions, item editing, request→SKU conversion.
  managers: [
    "bblessinger@denvercutlery.com"
  ]
};
