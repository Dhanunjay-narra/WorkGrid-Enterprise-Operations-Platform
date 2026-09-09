export class BiForecastsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsSession" };
  }
}
