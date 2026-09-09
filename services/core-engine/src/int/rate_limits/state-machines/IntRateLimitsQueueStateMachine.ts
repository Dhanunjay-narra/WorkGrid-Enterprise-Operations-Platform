export type IntRateLimitsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsQueueStateMachine {
  private allowedTransitions: Record<IntRateLimitsQueueState, IntRateLimitsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsQueueState, to: IntRateLimitsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsQueueState, to: IntRateLimitsQueueState): IntRateLimitsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
