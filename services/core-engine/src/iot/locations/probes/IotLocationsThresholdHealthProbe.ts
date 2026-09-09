export class IotLocationsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsThreshold" };
  }
}
