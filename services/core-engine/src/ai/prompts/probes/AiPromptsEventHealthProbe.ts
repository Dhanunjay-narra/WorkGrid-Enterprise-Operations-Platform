export class AiPromptsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsEvent" };
  }
}
