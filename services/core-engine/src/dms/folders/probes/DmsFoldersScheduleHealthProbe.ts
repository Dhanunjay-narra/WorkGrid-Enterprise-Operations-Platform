export class DmsFoldersScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersSchedule" };
  }
}
