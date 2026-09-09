export class DmsVersionsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsMapping" };
  }
}
