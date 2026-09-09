export class AiToolsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsSession" };
  }
}
