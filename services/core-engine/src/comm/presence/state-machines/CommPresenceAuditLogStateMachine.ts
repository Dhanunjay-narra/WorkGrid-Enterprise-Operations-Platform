export type CommPresenceAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceAuditLogStateMachine {
  private allowedTransitions: Record<CommPresenceAuditLogState, CommPresenceAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceAuditLogState, to: CommPresenceAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceAuditLogState, to: CommPresenceAuditLogState): CommPresenceAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
