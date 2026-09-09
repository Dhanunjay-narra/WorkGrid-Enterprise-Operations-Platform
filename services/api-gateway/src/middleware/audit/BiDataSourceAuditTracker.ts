export class BiDataSourceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiDataSource API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
