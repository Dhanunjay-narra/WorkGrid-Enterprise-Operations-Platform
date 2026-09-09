export class AiPromptsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsBatch" };
  }
}
