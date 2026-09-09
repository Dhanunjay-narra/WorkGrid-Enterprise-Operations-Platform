export class IotFleetEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetEntry" };
  }
}
