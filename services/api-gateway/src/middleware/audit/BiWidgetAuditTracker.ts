export class BiWidgetAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiWidget API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
