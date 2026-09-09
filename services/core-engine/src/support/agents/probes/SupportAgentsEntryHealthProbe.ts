export class SupportAgentsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsEntry" };
  }
}
