export class CrmLeadScoreAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmLeadScore API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
