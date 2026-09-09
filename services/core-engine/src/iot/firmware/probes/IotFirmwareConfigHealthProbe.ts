export class IotFirmwareConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareConfig" };
  }
}
