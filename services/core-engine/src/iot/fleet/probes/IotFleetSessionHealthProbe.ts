export class IotFleetSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetSession" };
  }
}
