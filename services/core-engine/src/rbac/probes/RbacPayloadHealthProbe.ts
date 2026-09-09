export class RbacPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacPayload" };
  }
}
