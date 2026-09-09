export type IntRateLimitsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsEntryStateMachine {
  private allowedTransitions: Record<IntRateLimitsEntryState, IntRateLimitsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsEntryState, to: IntRateLimitsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsEntryState, to: IntRateLimitsEntryState): IntRateLimitsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
