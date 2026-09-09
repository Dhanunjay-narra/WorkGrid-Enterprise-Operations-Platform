export class IntAdapterTelemetryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntAdapterTelemetry API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
