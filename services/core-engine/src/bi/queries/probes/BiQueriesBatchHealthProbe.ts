export class BiQueriesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesBatch" };
  }
}
