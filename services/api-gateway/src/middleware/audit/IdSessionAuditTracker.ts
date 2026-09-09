export class IdSessionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdSession API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
