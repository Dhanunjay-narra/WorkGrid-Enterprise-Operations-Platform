export class ProjectSprintsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsMapping" };
  }
}
