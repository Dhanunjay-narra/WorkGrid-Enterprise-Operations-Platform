export class DmsExportScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportSchedule" };
  }
}
