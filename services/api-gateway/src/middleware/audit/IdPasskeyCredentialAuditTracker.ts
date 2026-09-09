export class IdPasskeyCredentialAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdPasskeyCredential API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
