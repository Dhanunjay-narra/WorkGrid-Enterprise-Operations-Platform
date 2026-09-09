export class BiDashboardAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiDashboard API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
