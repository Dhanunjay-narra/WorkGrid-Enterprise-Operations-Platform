export type BiForecastsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsConfigStateMachine {
  private allowedTransitions: Record<BiForecastsConfigState, BiForecastsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsConfigState, to: BiForecastsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsConfigState, to: BiForecastsConfigState): BiForecastsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
