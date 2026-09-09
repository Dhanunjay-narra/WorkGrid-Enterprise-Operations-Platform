export type IntSlackEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackEntryStateMachine {
  private allowedTransitions: Record<IntSlackEntryState, IntSlackEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackEntryState, to: IntSlackEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackEntryState, to: IntSlackEntryState): IntSlackEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackEntry: " + from + " -> " + to);
    }
    return to;
  }
}
