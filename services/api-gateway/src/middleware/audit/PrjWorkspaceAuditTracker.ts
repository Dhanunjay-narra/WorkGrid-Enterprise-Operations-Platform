export class PrjWorkspaceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjWorkspace API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
