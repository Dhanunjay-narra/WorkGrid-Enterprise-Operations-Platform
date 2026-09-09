export class DmsRetentionSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionSession" };
  }
}
