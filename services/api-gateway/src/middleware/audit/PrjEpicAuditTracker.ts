export class PrjEpicAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjEpic API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
