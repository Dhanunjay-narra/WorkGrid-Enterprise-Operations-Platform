export class IntTransformationRuleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntTransformationRule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
