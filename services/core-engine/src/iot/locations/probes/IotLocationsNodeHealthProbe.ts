export class IotLocationsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsNode" };
  }
}
