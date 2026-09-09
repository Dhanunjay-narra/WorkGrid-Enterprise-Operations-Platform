export class BiForecastsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsThreshold" };
  }
}
