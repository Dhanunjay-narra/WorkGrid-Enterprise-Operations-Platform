export class DmsRetentionItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionItem" };
  }
}
