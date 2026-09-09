export class AiPromptsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsMapping" };
  }
}
