export class SupCannedResponseAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupCannedResponse API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
