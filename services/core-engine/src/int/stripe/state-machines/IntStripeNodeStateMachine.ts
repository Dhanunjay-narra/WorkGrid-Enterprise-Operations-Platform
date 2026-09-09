export type IntStripeNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeNodeStateMachine {
  private allowedTransitions: Record<IntStripeNodeState, IntStripeNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeNodeState, to: IntStripeNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeNodeState, to: IntStripeNodeState): IntStripeNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeNode: " + from + " -> " + to);
    }
    return to;
  }
}
