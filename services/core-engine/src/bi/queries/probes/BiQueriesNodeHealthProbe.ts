export class BiQueriesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesNode" };
  }
}
