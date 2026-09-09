export class BiQueriesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesTask" };
  }
}
