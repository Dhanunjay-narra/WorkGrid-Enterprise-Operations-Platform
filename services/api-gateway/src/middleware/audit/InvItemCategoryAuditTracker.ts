export class InvItemCategoryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvItemCategory API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
