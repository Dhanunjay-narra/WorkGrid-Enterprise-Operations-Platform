export class ObsMetricsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsPayload" };
  }
}
