export class IotFirmwareItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareItem" };
  }
}
