export class IotAnomalyAlertAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotAnomalyAlert API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
