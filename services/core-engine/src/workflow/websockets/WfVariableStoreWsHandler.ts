export class WfVariableStoreWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: workflow:" + tenantId + " | Event: " + eventName + " | Entity: WfVariableStore");
  }
}
