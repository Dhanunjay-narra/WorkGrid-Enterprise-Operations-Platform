export class IdPolicyWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: identity:" + tenantId + " | Event: " + eventName + " | Entity: IdPolicy");
  }
}
