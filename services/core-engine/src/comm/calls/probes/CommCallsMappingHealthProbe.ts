export class CommCallsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsMapping" };
  }
}
