export type CommDigestAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestAuditLogStateMachine {
  private allowedTransitions: Record<CommDigestAuditLogState, CommDigestAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestAuditLogState, to: CommDigestAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestAuditLogState, to: CommDigestAuditLogState): CommDigestAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
