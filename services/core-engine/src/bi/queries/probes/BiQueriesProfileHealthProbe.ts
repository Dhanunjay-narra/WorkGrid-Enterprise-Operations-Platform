export class BiQueriesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesProfile" };
  }
}
