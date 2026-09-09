export class IotHeartbeatRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotHeartbeatRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
