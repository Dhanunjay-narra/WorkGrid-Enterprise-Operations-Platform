export class IotFleetProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetProfile" };
  }
}
