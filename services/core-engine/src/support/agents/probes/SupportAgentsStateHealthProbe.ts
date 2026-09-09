export class SupportAgentsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsState" };
  }
}
