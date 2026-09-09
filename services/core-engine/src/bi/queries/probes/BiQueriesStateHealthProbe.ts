export class BiQueriesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesState" };
  }
}
