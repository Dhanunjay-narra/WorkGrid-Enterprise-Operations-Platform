export class IotFleetMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetMapping" };
  }
}
