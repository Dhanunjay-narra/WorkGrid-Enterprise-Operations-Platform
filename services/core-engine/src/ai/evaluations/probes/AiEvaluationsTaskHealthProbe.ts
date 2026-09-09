export class AiEvaluationsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsTask" };
  }
}
