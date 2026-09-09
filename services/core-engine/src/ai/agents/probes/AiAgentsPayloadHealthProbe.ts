export class AiAgentsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsPayload" };
  }
}
