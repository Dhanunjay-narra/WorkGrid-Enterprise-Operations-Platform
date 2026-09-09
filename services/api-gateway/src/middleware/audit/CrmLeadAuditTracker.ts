export class CrmLeadAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmLead API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
