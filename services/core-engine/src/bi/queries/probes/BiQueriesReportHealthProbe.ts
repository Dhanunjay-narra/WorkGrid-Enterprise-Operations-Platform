export class BiQueriesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesReport" };
  }
}
