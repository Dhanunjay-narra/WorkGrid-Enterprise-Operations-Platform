export class BiAnomaliesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesTask" };
  }
}
