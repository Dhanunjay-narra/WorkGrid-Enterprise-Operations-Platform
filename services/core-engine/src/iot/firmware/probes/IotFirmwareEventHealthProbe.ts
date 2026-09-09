export class IotFirmwareEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareEvent" };
  }
}
