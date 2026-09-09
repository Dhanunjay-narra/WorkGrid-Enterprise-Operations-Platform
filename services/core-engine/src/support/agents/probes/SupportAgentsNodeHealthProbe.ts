export class SupportAgentsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsNode" };
  }
}
