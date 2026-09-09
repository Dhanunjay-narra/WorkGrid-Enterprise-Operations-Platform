export class CrmDealAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmDeal API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
