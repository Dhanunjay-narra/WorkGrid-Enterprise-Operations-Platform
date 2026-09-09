export class AiEvaluationsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsNode" };
  }
}
