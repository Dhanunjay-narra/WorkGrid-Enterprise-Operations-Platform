export class CommAttachmentFileWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: communication:" + tenantId + " | Event: " + eventName + " | Entity: CommAttachmentFile");
  }
}
