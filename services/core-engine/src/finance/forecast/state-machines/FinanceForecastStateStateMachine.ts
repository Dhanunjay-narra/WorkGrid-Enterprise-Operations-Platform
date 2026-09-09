export type FinanceForecastStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastStateStateMachine {
  private allowedTransitions: Record<FinanceForecastStateState, FinanceForecastStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastStateState, to: FinanceForecastStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastStateState, to: FinanceForecastStateState): FinanceForecastStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastState: " + from + " -> " + to);
    }
    return to;
  }
}
