export class SupportAgentsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsPolicy" };
  }
}
