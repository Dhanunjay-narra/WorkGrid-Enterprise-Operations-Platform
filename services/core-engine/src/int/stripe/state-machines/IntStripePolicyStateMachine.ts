export type IntStripePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripePolicyStateMachine {
  private allowedTransitions: Record<IntStripePolicyState, IntStripePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripePolicyState, to: IntStripePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripePolicyState, to: IntStripePolicyState): IntStripePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
