export type RbacAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacAuditLogStateMachine {
  private allowedTransitions: Record<RbacAuditLogState, RbacAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacAuditLogState, to: RbacAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacAuditLogState, to: RbacAuditLogState): RbacAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
