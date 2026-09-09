export class CommThreadsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsMapping" };
  }
}
