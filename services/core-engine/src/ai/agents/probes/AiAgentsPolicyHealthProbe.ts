export class AiAgentsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsPolicy" };
  }
}
