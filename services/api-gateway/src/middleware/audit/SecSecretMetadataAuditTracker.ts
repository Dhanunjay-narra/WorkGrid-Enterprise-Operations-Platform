export class SecSecretMetadataAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecSecretMetadata API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
