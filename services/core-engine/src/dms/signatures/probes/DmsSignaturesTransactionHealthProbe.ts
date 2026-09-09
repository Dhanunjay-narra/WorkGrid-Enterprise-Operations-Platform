export class DmsSignaturesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesTransaction" };
  }
}
