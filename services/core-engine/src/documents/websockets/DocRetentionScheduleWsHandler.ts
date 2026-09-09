export class DocRetentionScheduleWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: documents:" + tenantId + " | Event: " + eventName + " | Entity: DocRetentionSchedule");
  }
}
