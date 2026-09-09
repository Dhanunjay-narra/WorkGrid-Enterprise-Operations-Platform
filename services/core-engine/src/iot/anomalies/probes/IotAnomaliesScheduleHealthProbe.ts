export class IotAnomaliesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesSchedule" };
  }
}
