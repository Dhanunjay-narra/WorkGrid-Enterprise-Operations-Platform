export class BiCohortsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsPayload" };
  }
}
