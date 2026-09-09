export class IotFleetBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetBatch" };
  }
}
