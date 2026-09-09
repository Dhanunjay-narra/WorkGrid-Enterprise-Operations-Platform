export class PrjReleasePlanAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjReleasePlan API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
