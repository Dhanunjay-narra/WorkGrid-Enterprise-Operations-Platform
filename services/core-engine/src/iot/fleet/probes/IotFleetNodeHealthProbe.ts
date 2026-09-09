export class IotFleetNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetNode" };
  }
}
