export class IdUserWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: identity:" + tenantId + " | Event: " + eventName + " | Entity: IdUser");
  }
}
