export type BiForecastsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsProfileStateMachine {
  private allowedTransitions: Record<BiForecastsProfileState, BiForecastsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsProfileState, to: BiForecastsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsProfileState, to: BiForecastsProfileState): BiForecastsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
