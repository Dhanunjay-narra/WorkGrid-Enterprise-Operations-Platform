export type IntSlackQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackQueueStateMachine {
  private allowedTransitions: Record<IntSlackQueueState, IntSlackQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackQueueState, to: IntSlackQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackQueueState, to: IntSlackQueueState): IntSlackQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackQueue: " + from + " -> " + to);
    }
    return to;
  }
}
