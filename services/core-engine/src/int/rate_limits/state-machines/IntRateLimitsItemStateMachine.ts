export type IntRateLimitsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsItemStateMachine {
  private allowedTransitions: Record<IntRateLimitsItemState, IntRateLimitsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsItemState, to: IntRateLimitsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsItemState, to: IntRateLimitsItemState): IntRateLimitsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsItem: " + from + " -> " + to);
    }
    return to;
  }
}
