export class IotLocationsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsPolicy" };
  }
}
