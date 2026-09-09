export class AiPromptsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsItem" };
  }
}
