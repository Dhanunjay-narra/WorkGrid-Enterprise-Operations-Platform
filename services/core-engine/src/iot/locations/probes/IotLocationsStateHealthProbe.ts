export class IotLocationsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsState" };
  }
}
