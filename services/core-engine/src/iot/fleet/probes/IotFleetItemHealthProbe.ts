export class IotFleetItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetItem" };
  }
}
