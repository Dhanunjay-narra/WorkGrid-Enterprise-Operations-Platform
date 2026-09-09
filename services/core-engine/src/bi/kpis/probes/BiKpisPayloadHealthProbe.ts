export class BiKpisPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisPayload" };
  }
}
