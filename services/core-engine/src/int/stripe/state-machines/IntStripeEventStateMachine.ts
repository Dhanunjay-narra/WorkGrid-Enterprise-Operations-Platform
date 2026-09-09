export type IntStripeEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeEventStateMachine {
  private allowedTransitions: Record<IntStripeEventState, IntStripeEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeEventState, to: IntStripeEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeEventState, to: IntStripeEventState): IntStripeEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeEvent: " + from + " -> " + to);
    }
    return to;
  }
}
