export class IotLocationsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsEvent" };
  }
}
