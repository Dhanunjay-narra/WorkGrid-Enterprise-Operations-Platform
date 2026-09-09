export type IntStripeEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeEntryStateMachine {
  private allowedTransitions: Record<IntStripeEntryState, IntStripeEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeEntryState, to: IntStripeEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeEntryState, to: IntStripeEntryState): IntStripeEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeEntry: " + from + " -> " + to);
    }
    return to;
  }
}
