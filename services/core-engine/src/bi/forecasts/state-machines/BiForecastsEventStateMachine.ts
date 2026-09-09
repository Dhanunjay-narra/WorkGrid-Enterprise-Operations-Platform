export type BiForecastsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsEventStateMachine {
  private allowedTransitions: Record<BiForecastsEventState, BiForecastsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsEventState, to: BiForecastsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsEventState, to: BiForecastsEventState): BiForecastsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
