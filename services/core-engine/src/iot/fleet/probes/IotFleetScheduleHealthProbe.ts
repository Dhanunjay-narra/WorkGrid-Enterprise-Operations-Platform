export class IotFleetScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetSchedule" };
  }
}
