export class BiForecastsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsPolicy" };
  }
}
