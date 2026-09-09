export class IotLocationsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsItem" };
  }
}
