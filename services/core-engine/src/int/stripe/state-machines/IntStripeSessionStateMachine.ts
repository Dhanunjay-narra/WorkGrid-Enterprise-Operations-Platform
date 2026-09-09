export type IntStripeSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeSessionStateMachine {
  private allowedTransitions: Record<IntStripeSessionState, IntStripeSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeSessionState, to: IntStripeSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeSessionState, to: IntStripeSessionState): IntStripeSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeSession: " + from + " -> " + to);
    }
    return to;
  }
}
