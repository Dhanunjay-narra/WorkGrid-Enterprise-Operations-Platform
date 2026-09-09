export class PrjSubtaskWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: projects:" + tenantId + " | Event: " + eventName + " | Entity: PrjSubtask");
  }
}
