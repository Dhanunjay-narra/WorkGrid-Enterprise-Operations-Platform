export class SupportAgentsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsPayload" };
  }
}
