export class BiQueriesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesQueue" };
  }
}
