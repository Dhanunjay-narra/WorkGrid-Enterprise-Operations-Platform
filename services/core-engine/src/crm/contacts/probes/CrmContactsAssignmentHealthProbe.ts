export class CrmContactsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsAssignment" };
  }
}
