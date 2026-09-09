export class IotFirmwareThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareThreshold" };
  }
}
