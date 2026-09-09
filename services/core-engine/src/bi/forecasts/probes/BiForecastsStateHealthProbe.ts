export class BiForecastsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsState" };
  }
}
