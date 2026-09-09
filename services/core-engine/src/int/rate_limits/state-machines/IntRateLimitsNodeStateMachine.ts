export type IntRateLimitsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsNodeStateMachine {
  private allowedTransitions: Record<IntRateLimitsNodeState, IntRateLimitsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsNodeState, to: IntRateLimitsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsNodeState, to: IntRateLimitsNodeState): IntRateLimitsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsNode: " + from + " -> " + to);
    }
    return to;
  }
}
