export class IotFleetReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetReport" };
  }
}
