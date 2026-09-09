export class AiRagEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagEntry" };
  }
}
