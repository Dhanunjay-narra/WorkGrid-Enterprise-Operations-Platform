export class FinFxRateHistoryWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: finance:" + tenantId + " | Event: " + eventName + " | Entity: FinFxRateHistory");
  }
}
