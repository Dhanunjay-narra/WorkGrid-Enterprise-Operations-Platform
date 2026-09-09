export class IntHealthCheckPingAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntHealthCheckPing API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
