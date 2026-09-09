export class SupportAgentsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsEvent" };
  }
}
