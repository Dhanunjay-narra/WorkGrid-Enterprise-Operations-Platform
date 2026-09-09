export class IotFleetQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetQueue" };
  }
}
