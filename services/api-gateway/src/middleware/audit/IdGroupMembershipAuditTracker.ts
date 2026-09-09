export class IdGroupMembershipAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdGroupMembership API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
