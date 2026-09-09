export class SecThreatEventAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecThreatEvent API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
