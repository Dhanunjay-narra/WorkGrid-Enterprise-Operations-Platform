export class BiDrilldownFilterAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiDrilldownFilter API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
