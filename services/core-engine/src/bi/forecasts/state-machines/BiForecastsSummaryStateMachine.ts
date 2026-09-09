export type BiForecastsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsSummaryStateMachine {
  private allowedTransitions: Record<BiForecastsSummaryState, BiForecastsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsSummaryState, to: BiForecastsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsSummaryState, to: BiForecastsSummaryState): BiForecastsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
