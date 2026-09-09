export type AbacQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacQueueStateMachine {
  private allowedTransitions: Record<AbacQueueState, AbacQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacQueueState, to: AbacQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacQueueState, to: AbacQueueState): AbacQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacQueue: " + from + " -> " + to);
    }
    return to;
  }
}
