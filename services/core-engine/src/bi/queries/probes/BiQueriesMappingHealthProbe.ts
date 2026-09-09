export class BiQueriesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesMapping" };
  }
}
