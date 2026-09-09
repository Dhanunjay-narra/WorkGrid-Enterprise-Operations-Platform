export type IntSlackTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackTaskStateMachine {
  private allowedTransitions: Record<IntSlackTaskState, IntSlackTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackTaskState, to: IntSlackTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackTaskState, to: IntSlackTaskState): IntSlackTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackTask: " + from + " -> " + to);
    }
    return to;
  }
}
