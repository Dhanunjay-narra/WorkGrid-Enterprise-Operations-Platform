export class HrInterviewStageWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: hr:" + tenantId + " | Event: " + eventName + " | Entity: HrInterviewStage");
  }
}
