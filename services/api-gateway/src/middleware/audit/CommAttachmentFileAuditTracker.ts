export class CommAttachmentFileAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommAttachmentFile API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
