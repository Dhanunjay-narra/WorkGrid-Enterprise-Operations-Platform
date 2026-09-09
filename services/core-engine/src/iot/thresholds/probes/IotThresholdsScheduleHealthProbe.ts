export class IotThresholdsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsSchedule" };
  }
}
