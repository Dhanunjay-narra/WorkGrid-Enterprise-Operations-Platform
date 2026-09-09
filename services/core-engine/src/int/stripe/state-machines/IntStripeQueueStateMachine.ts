export type IntStripeQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeQueueStateMachine {
  private allowedTransitions: Record<IntStripeQueueState, IntStripeQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeQueueState, to: IntStripeQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeQueueState, to: IntStripeQueueState): IntStripeQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeQueue: " + from + " -> " + to);
    }
    return to;
  }
}
