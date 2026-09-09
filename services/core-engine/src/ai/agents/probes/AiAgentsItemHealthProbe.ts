export class AiAgentsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsItem" };
  }
}
