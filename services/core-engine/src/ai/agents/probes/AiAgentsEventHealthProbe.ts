export class AiAgentsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsEvent" };
  }
}
