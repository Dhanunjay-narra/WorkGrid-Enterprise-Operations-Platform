export class ProjectTasksPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksPayload" };
  }
}
