export class AiRagSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagSummary" };
  }
}
