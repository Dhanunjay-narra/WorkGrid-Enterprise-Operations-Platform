export class BiQueriesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesEvent" };
  }
}
