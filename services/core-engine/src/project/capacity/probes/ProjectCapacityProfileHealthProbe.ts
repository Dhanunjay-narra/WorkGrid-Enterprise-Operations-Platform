export class ProjectCapacityProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityProfile" };
  }
}
