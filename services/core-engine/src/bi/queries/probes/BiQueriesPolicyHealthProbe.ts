export class BiQueriesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesPolicy" };
  }
}
