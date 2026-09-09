export class IotTelemetryMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotTelemetryMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
