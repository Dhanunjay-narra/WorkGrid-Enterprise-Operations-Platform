export class AiAgentsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsSession" };
  }
}
