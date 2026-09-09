export type IntSlackStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackStateStateMachine {
  private allowedTransitions: Record<IntSlackStateState, IntSlackStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackStateState, to: IntSlackStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackStateState, to: IntSlackStateState): IntSlackStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackState: " + from + " -> " + to);
    }
    return to;
  }
}
