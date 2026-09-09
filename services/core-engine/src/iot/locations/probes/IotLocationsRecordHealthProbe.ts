export class IotLocationsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsRecord" };
  }
}
