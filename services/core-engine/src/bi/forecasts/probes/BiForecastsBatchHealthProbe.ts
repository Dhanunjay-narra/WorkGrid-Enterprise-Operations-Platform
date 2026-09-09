export class BiForecastsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsBatch" };
  }
}
