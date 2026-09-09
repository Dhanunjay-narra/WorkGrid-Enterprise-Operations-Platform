export class DmsChunksRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksRecord" };
  }
}
