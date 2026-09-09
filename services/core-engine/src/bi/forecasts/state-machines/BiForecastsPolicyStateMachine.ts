export type BiForecastsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsPolicyStateMachine {
  private allowedTransitions: Record<BiForecastsPolicyState, BiForecastsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsPolicyState, to: BiForecastsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsPolicyState, to: BiForecastsPolicyState): BiForecastsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
