export class SupportAgentsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsConfig" };
  }
}
