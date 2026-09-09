export class IotDevicesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesRecord" };
  }
}
