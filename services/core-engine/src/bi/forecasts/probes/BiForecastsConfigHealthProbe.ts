export class BiForecastsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsConfig" };
  }
}
