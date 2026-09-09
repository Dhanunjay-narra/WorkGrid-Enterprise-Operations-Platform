export class BiCohortGroupAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiCohortGroup API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
