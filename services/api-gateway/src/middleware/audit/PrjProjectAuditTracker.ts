export class PrjProjectAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjProject API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
