export class InvStorageBinAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvStorageBin API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
