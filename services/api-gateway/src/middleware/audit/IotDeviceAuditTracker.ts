export class IotDeviceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotDevice API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
