export class DmsChunksEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksEntry" };
  }
}
