export type FinanceForecastEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastEventStateMachine {
  private allowedTransitions: Record<FinanceForecastEventState, FinanceForecastEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastEventState, to: FinanceForecastEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastEventState, to: FinanceForecastEventState): FinanceForecastEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastEvent: " + from + " -> " + to);
    }
    return to;
  }
}
