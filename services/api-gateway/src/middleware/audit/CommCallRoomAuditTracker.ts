export class CommCallRoomAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommCallRoom API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
