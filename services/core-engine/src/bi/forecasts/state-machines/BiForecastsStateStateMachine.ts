export type BiForecastsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsStateStateMachine {
  private allowedTransitions: Record<BiForecastsStateState, BiForecastsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsStateState, to: BiForecastsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsStateState, to: BiForecastsStateState): BiForecastsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsState: " + from + " -> " + to);
    }
    return to;
  }
}
