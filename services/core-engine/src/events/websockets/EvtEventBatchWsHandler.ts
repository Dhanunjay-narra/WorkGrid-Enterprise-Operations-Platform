export class EvtEventBatchWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: events:" + tenantId + " | Event: " + eventName + " | Entity: EvtEventBatch");
  }
}
