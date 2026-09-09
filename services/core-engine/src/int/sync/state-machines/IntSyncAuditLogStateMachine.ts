export type IntSyncAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncAuditLogStateMachine {
  private allowedTransitions: Record<IntSyncAuditLogState, IntSyncAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncAuditLogState, to: IntSyncAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncAuditLogState, to: IntSyncAuditLogState): IntSyncAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
