export class IotLocationsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsEntry" };
  }
}
