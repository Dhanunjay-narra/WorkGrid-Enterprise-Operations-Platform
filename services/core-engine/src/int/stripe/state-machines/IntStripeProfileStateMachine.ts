export type IntStripeProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeProfileStateMachine {
  private allowedTransitions: Record<IntStripeProfileState, IntStripeProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeProfileState, to: IntStripeProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeProfileState, to: IntStripeProfileState): IntStripeProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeProfile: " + from + " -> " + to);
    }
    return to;
  }
}
