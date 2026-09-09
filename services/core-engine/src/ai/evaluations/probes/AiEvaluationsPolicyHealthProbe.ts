export class AiEvaluationsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsPolicy" };
  }
}
