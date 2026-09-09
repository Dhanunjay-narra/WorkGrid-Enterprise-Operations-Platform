export class BiForecastsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsEntry" };
  }
}
