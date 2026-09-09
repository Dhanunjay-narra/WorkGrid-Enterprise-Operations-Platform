export class ProjectSprintsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsNode" };
  }
}
