export type FinanceForecastItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastItemStateMachine {
  private allowedTransitions: Record<FinanceForecastItemState, FinanceForecastItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastItemState, to: FinanceForecastItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastItemState, to: FinanceForecastItemState): FinanceForecastItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastItem: " + from + " -> " + to);
    }
    return to;
  }
}
