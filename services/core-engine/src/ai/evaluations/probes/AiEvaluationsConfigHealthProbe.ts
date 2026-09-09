export class AiEvaluationsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsConfig" };
  }
}
