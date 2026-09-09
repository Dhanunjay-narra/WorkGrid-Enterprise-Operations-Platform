export class EvtAckReceiptAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtAckReceipt API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
