export type BiForecastsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsQueueStateMachine {
  private allowedTransitions: Record<BiForecastsQueueState, BiForecastsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsQueueState, to: BiForecastsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsQueueState, to: BiForecastsQueueState): BiForecastsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
