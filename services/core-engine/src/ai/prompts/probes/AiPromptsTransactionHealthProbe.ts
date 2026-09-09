export class AiPromptsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsTransaction" };
  }
}
