export type FinanceForecastRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastRuleStateMachine {
  private allowedTransitions: Record<FinanceForecastRuleState, FinanceForecastRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastRuleState, to: FinanceForecastRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastRuleState, to: FinanceForecastRuleState): FinanceForecastRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastRule: " + from + " -> " + to);
    }
    return to;
  }
}
