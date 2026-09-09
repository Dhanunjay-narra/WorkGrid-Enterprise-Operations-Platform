export class PrjKanbanColumnAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjKanbanColumn API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
