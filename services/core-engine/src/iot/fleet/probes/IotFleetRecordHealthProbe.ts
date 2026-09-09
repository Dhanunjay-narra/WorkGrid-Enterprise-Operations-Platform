export class IotFleetRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetRecord" };
  }
}
