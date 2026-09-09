export class AiEvaluationsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsState" };
  }
}
