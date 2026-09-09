export class BiForecastsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsEvent" };
  }
}
