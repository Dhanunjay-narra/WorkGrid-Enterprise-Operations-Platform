export class IotFirmwareVersionWsHandler {
  public static broadcast(tenantId: string, eventName: string, data: any): void {
    console.log("[WS-BROADCAST] Channel: iot:" + tenantId + " | Event: " + eventName + " | Entity: IotFirmwareVersion");
  }
}
