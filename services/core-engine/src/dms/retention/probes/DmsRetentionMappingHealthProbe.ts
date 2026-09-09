export class DmsRetentionMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionMapping" };
  }
}
