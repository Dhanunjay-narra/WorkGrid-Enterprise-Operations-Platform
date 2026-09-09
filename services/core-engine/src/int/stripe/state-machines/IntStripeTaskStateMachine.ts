export type IntStripeTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeTaskStateMachine {
  private allowedTransitions: Record<IntStripeTaskState, IntStripeTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeTaskState, to: IntStripeTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeTaskState, to: IntStripeTaskState): IntStripeTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeTask: " + from + " -> " + to);
    }
    return to;
  }
}
