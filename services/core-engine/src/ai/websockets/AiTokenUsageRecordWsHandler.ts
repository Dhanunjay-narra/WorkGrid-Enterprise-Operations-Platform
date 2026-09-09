export class AiTokenUsageRecordWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: ai:" + tenantId + " | Event: " + eventName + " | Entity: AiTokenUsageRecord");
  }
}
