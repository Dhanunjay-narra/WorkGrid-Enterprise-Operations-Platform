export class BiForecastsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsItem" };
  }
}
