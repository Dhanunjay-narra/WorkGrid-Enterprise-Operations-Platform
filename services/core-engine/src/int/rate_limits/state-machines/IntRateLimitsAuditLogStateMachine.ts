export type IntRateLimitsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsAuditLogStateMachine {
  private allowedTransitions: Record<IntRateLimitsAuditLogState, IntRateLimitsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsAuditLogState, to: IntRateLimitsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsAuditLogState, to: IntRateLimitsAuditLogState): IntRateLimitsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
