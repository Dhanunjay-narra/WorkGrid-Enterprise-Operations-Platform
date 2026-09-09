export type IntStripeAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeAuditLogStateMachine {
  private allowedTransitions: Record<IntStripeAuditLogState, IntStripeAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeAuditLogState, to: IntStripeAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeAuditLogState, to: IntStripeAuditLogState): IntStripeAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
