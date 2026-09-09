export type FinFinancialForecastState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinFinancialForecastStateMachine {
  private validTransitions: Record<FinFinancialForecastState, FinFinancialForecastState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinFinancialForecastState, next: FinFinancialForecastState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinFinancialForecastState, next: FinFinancialForecastState): FinFinancialForecastState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinFinancialForecast: from " + current + " to " + next);
    }
    return next;
  }
}
