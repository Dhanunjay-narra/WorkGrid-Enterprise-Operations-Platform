export class IotLocationsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsTask" };
  }
}
