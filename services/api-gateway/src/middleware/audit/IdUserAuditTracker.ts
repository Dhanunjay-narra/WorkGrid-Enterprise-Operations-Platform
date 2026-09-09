export class IdUserAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdUser API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
