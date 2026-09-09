export class IotLocationsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsQueue" };
  }
}
