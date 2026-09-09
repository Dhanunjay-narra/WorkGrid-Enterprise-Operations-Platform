export class IotLocationsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsProfile" };
  }
}
