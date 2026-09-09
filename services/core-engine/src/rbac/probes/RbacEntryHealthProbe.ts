export class RbacEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacEntry" };
  }
}
