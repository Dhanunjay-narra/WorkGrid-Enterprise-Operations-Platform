export type CrmForecastingRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingRuleStateMachine {
  private allowedTransitions: Record<CrmForecastingRuleState, CrmForecastingRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingRuleState, to: CrmForecastingRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingRuleState, to: CrmForecastingRuleState): CrmForecastingRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingRule: " + from + " -> " + to);
    }
    return to;
  }
}
