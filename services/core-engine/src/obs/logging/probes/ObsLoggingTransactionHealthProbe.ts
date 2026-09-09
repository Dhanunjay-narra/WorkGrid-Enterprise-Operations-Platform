export class ObsLoggingTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingTransaction" };
  }
}
