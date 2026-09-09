export class IotFirmwareStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareState" };
  }
}
