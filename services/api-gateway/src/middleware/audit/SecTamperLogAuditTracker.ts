export class SecTamperLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecTamperLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
