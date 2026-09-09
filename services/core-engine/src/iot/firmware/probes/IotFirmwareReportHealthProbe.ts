export class IotFirmwareReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareReport" };
  }
}
