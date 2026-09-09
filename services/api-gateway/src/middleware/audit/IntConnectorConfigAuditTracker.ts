export class IntConnectorConfigAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntConnectorConfig API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
