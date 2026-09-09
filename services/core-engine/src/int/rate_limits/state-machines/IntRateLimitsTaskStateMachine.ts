export type IntRateLimitsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsTaskStateMachine {
  private allowedTransitions: Record<IntRateLimitsTaskState, IntRateLimitsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsTaskState, to: IntRateLimitsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsTaskState, to: IntRateLimitsTaskState): IntRateLimitsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsTask: " + from + " -> " + to);
    }
    return to;
  }
}
