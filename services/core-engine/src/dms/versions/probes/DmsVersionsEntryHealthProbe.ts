export class DmsVersionsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsEntry" };
  }
}
