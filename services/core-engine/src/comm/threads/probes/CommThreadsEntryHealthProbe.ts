export class CommThreadsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsEntry" };
  }
}
