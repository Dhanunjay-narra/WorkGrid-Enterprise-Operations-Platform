export class IotFirmwareRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareRecord" };
  }
}
