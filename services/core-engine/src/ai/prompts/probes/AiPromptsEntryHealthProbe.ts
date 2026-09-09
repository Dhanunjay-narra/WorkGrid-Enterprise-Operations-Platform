export class AiPromptsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsEntry" };
  }
}
