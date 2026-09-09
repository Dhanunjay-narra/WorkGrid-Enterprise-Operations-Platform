export class AiToolsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsNode" };
  }
}
