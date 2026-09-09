export class CrmSalesContractAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmSalesContract API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
