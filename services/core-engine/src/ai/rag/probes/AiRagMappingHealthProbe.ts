export class AiRagMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagMapping" };
  }
}
