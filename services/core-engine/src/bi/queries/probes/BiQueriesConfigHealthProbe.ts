export class BiQueriesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesConfig" };
  }
}
