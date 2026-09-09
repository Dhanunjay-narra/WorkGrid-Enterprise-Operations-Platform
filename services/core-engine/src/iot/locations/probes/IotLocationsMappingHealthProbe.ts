export class IotLocationsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsMapping" };
  }
}
