export type IntSlackNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackNodeStateMachine {
  private allowedTransitions: Record<IntSlackNodeState, IntSlackNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackNodeState, to: IntSlackNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackNodeState, to: IntSlackNodeState): IntSlackNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackNode: " + from + " -> " + to);
    }
    return to;
  }
}
