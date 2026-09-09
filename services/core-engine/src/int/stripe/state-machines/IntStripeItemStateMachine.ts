export type IntStripeItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeItemStateMachine {
  private allowedTransitions: Record<IntStripeItemState, IntStripeItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeItemState, to: IntStripeItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeItemState, to: IntStripeItemState): IntStripeItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeItem: " + from + " -> " + to);
    }
    return to;
  }
}
