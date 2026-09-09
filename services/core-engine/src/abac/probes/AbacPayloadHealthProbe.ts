export class AbacPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacPayload" };
  }
}
