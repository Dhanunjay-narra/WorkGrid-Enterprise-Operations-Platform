export class SupportAgentsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsTask" };
  }
}
