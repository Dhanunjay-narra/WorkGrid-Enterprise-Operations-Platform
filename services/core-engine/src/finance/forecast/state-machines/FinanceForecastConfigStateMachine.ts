export type FinanceForecastConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastConfigStateMachine {
  private allowedTransitions: Record<FinanceForecastConfigState, FinanceForecastConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastConfigState, to: FinanceForecastConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastConfigState, to: FinanceForecastConfigState): FinanceForecastConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastConfig: " + from + " -> " + to);
    }
    return to;
  }
}
