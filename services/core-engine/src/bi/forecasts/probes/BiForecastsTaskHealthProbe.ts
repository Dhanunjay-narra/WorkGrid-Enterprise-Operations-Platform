export class BiForecastsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsTask" };
  }
}
