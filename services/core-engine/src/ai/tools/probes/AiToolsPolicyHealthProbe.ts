export class AiToolsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsPolicy" };
  }
}
