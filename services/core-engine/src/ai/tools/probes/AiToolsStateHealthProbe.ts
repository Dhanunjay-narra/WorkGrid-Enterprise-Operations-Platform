export class AiToolsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsState" };
  }
}
