export type IntStripeThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeThresholdStateMachine {
  private allowedTransitions: Record<IntStripeThresholdState, IntStripeThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeThresholdState, to: IntStripeThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeThresholdState, to: IntStripeThresholdState): IntStripeThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
