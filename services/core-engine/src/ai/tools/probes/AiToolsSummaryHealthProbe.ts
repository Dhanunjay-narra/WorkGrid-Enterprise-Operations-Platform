export class AiToolsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsSummary" };
  }
}
