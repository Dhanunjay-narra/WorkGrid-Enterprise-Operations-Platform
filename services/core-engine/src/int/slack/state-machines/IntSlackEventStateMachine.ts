export type IntSlackEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackEventStateMachine {
  private allowedTransitions: Record<IntSlackEventState, IntSlackEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackEventState, to: IntSlackEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackEventState, to: IntSlackEventState): IntSlackEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackEvent: " + from + " -> " + to);
    }
    return to;
  }
}
