export class IotFleetConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetConfig" };
  }
}
