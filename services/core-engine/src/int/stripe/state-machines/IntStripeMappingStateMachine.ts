export type IntStripeMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeMappingStateMachine {
  private allowedTransitions: Record<IntStripeMappingState, IntStripeMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeMappingState, to: IntStripeMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeMappingState, to: IntStripeMappingState): IntStripeMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeMapping: " + from + " -> " + to);
    }
    return to;
  }
}
