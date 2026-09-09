export type BiCohortsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsQueueStateMachine {
  private allowedTransitions: Record<BiCohortsQueueState, BiCohortsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsQueueState, to: BiCohortsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsQueueState, to: BiCohortsQueueState): BiCohortsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
