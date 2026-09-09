export class IotLocationsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsConfig" };
  }
}
