export type BiForecastsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsTaskStateMachine {
  private allowedTransitions: Record<BiForecastsTaskState, BiForecastsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsTaskState, to: BiForecastsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsTaskState, to: BiForecastsTaskState): BiForecastsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsTask: " + from + " -> " + to);
    }
    return to;
  }
}
