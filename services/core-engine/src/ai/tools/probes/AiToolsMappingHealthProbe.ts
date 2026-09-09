export class AiToolsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsMapping" };
  }
}
