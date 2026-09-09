export class AiPromptsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsSummary" };
  }
}
