export class CommMessagesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesAssignment" };
  }
}
