export class SecComplianceReportAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecComplianceReport API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
