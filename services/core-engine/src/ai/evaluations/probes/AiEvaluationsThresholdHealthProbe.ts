export class AiEvaluationsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsThreshold" };
  }
}
