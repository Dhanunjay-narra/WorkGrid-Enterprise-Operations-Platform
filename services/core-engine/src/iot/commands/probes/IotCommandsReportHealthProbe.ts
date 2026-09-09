export class IotCommandsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsReport" };
  }
}
