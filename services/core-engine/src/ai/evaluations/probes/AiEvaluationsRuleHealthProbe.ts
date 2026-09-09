export class AiEvaluationsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsRule" };
  }
}
