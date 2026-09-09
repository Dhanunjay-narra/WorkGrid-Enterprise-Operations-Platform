export class IotFirmwareVersionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotFirmwareVersion API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
