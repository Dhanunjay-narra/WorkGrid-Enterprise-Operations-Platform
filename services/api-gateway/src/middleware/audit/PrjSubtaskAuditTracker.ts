export class PrjSubtaskAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjSubtask API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
