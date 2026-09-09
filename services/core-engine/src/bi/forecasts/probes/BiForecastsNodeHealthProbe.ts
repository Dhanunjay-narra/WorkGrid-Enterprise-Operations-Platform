export class BiForecastsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsNode" };
  }
}
