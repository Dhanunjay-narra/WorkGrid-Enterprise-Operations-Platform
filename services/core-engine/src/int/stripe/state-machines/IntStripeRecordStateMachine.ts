export type IntStripeRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeRecordStateMachine {
  private allowedTransitions: Record<IntStripeRecordState, IntStripeRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeRecordState, to: IntStripeRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeRecordState, to: IntStripeRecordState): IntStripeRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeRecord: " + from + " -> " + to);
    }
    return to;
  }
}
