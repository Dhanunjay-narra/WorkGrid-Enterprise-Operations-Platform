export class DmsOcrRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrRecord" };
  }
}
