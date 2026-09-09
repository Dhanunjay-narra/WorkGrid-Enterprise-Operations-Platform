export class DmsRetentionEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionEvent" };
  }
}
