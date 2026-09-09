export type IdentityAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityAuditLogStateMachine {
  private allowedTransitions: Record<IdentityAuditLogState, IdentityAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityAuditLogState, to: IdentityAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityAuditLogState, to: IdentityAuditLogState): IdentityAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
