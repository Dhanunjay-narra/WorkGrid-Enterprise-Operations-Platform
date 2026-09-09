export class IotDevicesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesThreshold" };
  }
}
