export type CommNotificationsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsAuditLogStateMachine {
  private allowedTransitions: Record<CommNotificationsAuditLogState, CommNotificationsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsAuditLogState, to: CommNotificationsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsAuditLogState, to: CommNotificationsAuditLogState): CommNotificationsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
