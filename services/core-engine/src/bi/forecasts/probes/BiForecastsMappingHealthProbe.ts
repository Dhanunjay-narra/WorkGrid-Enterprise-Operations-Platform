export class BiForecastsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsMapping" };
  }
}
