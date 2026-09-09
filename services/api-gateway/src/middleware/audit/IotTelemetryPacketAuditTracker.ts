export class IotTelemetryPacketAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotTelemetryPacket API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
