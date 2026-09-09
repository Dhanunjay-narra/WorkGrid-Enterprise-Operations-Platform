export class InvTransferOrderAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvTransferOrder API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
