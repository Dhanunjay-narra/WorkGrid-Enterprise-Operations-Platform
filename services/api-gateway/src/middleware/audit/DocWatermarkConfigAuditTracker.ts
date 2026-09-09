export class DocWatermarkConfigAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocWatermarkConfig API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
