export class BiExportJobAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiExportJob API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
