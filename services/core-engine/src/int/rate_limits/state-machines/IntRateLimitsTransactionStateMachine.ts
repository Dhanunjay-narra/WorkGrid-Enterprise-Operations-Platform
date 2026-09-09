export type IntRateLimitsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsTransactionStateMachine {
  private allowedTransitions: Record<IntRateLimitsTransactionState, IntRateLimitsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsTransactionState, to: IntRateLimitsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsTransactionState, to: IntRateLimitsTransactionState): IntRateLimitsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
