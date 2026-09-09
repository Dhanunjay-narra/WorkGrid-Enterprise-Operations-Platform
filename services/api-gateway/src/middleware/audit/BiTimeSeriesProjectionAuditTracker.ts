export class BiTimeSeriesProjectionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiTimeSeriesProjection API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
