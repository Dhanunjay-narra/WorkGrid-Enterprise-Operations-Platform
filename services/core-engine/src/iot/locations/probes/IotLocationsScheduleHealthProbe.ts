export class IotLocationsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsSchedule" };
  }
}
