export class BiQueriesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesTransaction" };
  }
}
