export class BiWidgetWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: analytics:" + tenantId + " | Event: " + eventName + " | Entity: BiWidget");
  }
}
