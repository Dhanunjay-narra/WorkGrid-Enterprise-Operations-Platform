export class CrmCustomerHealthAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmCustomerHealth API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
