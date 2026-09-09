export type IntSlackItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackItemStateMachine {
  private allowedTransitions: Record<IntSlackItemState, IntSlackItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackItemState, to: IntSlackItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackItemState, to: IntSlackItemState): IntSlackItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackItem: " + from + " -> " + to);
    }
    return to;
  }
}
