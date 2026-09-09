export class InvReorderRuleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvReorderRule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
