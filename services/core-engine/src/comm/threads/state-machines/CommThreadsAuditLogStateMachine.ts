export type CommThreadsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsAuditLogStateMachine {
  private allowedTransitions: Record<CommThreadsAuditLogState, CommThreadsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsAuditLogState, to: CommThreadsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsAuditLogState, to: CommThreadsAuditLogState): CommThreadsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
