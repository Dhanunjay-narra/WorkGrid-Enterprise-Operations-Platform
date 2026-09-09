export class SupRoutingConditionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupRoutingCondition API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
