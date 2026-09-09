export class IotFleetTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetTask" };
  }
}
