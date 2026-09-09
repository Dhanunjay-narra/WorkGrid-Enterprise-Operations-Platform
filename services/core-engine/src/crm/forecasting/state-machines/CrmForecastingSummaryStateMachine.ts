export type CrmForecastingSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingSummaryStateMachine {
  private allowedTransitions: Record<CrmForecastingSummaryState, CrmForecastingSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingSummaryState, to: CrmForecastingSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingSummaryState, to: CrmForecastingSummaryState): CrmForecastingSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingSummary: " + from + " -> " + to);
    }
    return to;
  }
}
