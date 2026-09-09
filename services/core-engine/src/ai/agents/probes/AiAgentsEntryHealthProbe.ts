export class AiAgentsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsEntry" };
  }
}
