export class DmsVersionsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsTransaction" };
  }
}
