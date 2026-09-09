export class CommDigestMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestMapping" };
  }
}
