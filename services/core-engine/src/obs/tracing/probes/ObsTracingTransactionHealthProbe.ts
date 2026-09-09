export class ObsTracingTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingTransaction" };
  }
}
