export class InvBatchSerialAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvBatchSerial API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
