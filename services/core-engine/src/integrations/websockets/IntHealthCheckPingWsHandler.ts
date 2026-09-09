export class IntHealthCheckPingWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: integrations:" + tenantId + " | Event: " + eventName + " | Entity: IntHealthCheckPing");
  }
}
