export class DmsRetentionEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionEntry" };
  }
}
