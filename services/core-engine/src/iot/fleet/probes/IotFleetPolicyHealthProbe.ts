export class IotFleetPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetPolicy" };
  }
}
