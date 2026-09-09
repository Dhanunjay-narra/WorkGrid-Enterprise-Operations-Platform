export class DmsOcrTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrTransaction" };
  }
}
