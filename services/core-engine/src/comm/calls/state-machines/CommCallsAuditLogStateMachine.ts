export type CommCallsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsAuditLogStateMachine {
  private allowedTransitions: Record<CommCallsAuditLogState, CommCallsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsAuditLogState, to: CommCallsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsAuditLogState, to: CommCallsAuditLogState): CommCallsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
