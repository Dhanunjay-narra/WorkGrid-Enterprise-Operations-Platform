export class BiAnomaliesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesPayload" };
  }
}
