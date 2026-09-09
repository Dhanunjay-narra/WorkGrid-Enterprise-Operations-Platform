export class IotAnomaliesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesTask" };
  }
}
