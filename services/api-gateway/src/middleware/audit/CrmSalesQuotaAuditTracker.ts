export class CrmSalesQuotaAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmSalesQuota API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
