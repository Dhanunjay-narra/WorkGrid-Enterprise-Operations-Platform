export class SupQueueWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: support:" + tenantId + " | Event: " + eventName + " | Entity: SupQueue");
  }
}
