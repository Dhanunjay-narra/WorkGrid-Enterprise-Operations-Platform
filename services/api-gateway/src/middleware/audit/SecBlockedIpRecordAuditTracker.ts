export class SecBlockedIpRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecBlockedIpRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
