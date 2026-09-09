export class IotDeviceGroupAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotDeviceGroup API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
