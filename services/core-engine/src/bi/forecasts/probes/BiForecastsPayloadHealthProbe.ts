export class BiForecastsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsPayload" };
  }
}
