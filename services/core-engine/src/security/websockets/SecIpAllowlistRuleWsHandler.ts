export class SecIpAllowlistRuleWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: security:" + tenantId + " | Event: " + eventName + " | Entity: SecIpAllowlistRule");
  }
}
