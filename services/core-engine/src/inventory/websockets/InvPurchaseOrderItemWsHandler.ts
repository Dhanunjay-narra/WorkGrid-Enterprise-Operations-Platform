export class InvPurchaseOrderItemWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: inventory:" + tenantId + " | Event: " + eventName + " | Entity: InvPurchaseOrderItem");
  }
}
