export type BiForecastsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsSessionStateMachine {
  private allowedTransitions: Record<BiForecastsSessionState, BiForecastsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsSessionState, to: BiForecastsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsSessionState, to: BiForecastsSessionState): BiForecastsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsSession: " + from + " -> " + to);
    }
    return to;
  }
}
