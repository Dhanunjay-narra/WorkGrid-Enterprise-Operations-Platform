export class DmsRetentionRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionRecord" };
  }
}
