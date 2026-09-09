export class SupEscalationRuleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupEscalationRule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
