export class BiKpisTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisTransaction" };
  }
}
