export type IntStripeStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeStateStateMachine {
  private allowedTransitions: Record<IntStripeStateState, IntStripeStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeStateState, to: IntStripeStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeStateState, to: IntStripeStateState): IntStripeStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeState: " + from + " -> " + to);
    }
    return to;
  }
}
