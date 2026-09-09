export type SecurityAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityAuditLogStateMachine {
  private allowedTransitions: Record<SecurityAuditLogState, SecurityAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityAuditLogState, to: SecurityAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityAuditLogState, to: SecurityAuditLogState): SecurityAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
