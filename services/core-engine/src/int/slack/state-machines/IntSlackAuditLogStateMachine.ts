export type IntSlackAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackAuditLogStateMachine {
  private allowedTransitions: Record<IntSlackAuditLogState, IntSlackAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackAuditLogState, to: IntSlackAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackAuditLogState, to: IntSlackAuditLogState): IntSlackAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
