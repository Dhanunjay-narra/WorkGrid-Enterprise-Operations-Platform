export class BiForecastsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsProfile" };
  }
}
