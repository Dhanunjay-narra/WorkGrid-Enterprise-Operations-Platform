export class IotDeviceLocationAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotDeviceLocation API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
