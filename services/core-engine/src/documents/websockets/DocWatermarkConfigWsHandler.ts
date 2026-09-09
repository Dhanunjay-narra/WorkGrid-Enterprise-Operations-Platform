export class DocWatermarkConfigWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: documents:" + tenantId + " | Event: " + eventName + " | Entity: DocWatermarkConfig");
  }
}
