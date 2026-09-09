export class DmsRetentionNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionNode" };
  }
}
