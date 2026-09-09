export class FinRefundRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinRefundRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
