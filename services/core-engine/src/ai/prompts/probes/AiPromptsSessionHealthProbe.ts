export class AiPromptsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsSession" };
  }
}
