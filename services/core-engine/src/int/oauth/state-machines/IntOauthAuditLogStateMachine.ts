export type IntOauthAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthAuditLogStateMachine {
  private allowedTransitions: Record<IntOauthAuditLogState, IntOauthAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthAuditLogState, to: IntOauthAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthAuditLogState, to: IntOauthAuditLogState): IntOauthAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
