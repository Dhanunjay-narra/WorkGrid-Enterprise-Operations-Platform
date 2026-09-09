export class AiEvaluationsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsReport" };
  }
}
