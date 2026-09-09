export class IotFleetEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetEvent" };
  }
}
