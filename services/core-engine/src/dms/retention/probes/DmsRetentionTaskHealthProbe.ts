export class DmsRetentionTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionTask" };
  }
}
