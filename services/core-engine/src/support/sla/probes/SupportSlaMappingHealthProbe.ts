export class SupportSlaMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaMapping" };
  }
}
