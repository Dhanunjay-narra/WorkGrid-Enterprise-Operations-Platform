export class BiForecastsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsQueue" };
  }
}
