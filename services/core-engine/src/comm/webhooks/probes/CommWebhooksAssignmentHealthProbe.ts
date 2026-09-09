export class CommWebhooksAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksAssignment" };
  }
}
