export class IdApiKeyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdApiKey API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
