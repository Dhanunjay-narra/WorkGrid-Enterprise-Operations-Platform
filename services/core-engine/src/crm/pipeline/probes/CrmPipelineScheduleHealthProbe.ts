export class CrmPipelineScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelineSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelineSchedule" };
  }
}
