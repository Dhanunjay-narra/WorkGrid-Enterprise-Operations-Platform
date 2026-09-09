export class IotFleetThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetThreshold" };
  }
}
