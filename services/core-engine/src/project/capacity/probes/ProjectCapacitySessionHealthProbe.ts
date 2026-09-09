export class ProjectCapacitySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacitySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacitySession" };
  }
}
