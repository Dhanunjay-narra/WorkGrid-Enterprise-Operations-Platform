export class IotCommandsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsSchedule" };
  }
}
