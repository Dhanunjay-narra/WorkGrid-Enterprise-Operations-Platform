export class PrjGanttDependencyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjGanttDependency API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
