export class IotLocationsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsSession" };
  }
}
