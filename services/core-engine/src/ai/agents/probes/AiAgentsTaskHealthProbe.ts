export class AiAgentsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsTask" };
  }
}
