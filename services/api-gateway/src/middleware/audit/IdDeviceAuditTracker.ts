export class IdDeviceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdDevice API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
