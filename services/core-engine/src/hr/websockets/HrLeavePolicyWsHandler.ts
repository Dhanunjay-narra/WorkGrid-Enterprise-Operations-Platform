export class HrLeavePolicyWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: hr:" + tenantId + " | Event: " + eventName + " | Entity: HrLeavePolicy");
  }
}
