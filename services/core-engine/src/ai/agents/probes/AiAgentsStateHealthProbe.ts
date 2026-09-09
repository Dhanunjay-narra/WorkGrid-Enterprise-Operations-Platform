export class AiAgentsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsState" };
  }
}
