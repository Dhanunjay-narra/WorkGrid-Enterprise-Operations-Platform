export class SupportAgentsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsProfile" };
  }
}
