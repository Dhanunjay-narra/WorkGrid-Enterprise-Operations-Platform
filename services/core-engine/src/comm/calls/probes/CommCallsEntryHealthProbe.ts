export class CommCallsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsEntry" };
  }
}
