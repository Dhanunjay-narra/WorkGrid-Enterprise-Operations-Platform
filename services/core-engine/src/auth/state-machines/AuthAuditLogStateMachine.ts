export type AuthAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthAuditLogStateMachine {
  private allowedTransitions: Record<AuthAuditLogState, AuthAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthAuditLogState, to: AuthAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthAuditLogState, to: AuthAuditLogState): AuthAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
