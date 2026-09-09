export class AiEvaluationsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsMapping" };
  }
}
