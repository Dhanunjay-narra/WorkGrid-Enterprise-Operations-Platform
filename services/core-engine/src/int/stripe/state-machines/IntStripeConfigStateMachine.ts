export type IntStripeConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeConfigStateMachine {
  private allowedTransitions: Record<IntStripeConfigState, IntStripeConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeConfigState, to: IntStripeConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeConfigState, to: IntStripeConfigState): IntStripeConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeConfig: " + from + " -> " + to);
    }
    return to;
  }
}
