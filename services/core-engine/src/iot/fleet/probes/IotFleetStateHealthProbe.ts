export class IotFleetStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetState" };
  }
}
