export class CrmMeetingWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: crm:" + tenantId + " | Event: " + eventName + " | Entity: CrmMeeting");
  }
}
