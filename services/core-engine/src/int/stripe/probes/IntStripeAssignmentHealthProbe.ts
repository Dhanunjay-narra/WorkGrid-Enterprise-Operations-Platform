export class IntStripeAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeAssignment" };
  }
}
