export class IotDeviceCommandAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotDeviceCommand API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
