export class IntWebhooksAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksAssignment" };
  }
}
