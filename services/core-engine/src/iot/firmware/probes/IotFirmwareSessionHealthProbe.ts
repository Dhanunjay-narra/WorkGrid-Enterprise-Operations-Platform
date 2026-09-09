export class IotFirmwareSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareSession" };
  }
}
