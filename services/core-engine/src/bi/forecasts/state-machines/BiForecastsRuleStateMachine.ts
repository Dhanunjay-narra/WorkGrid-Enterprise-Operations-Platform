export type BiForecastsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsRuleStateMachine {
  private allowedTransitions: Record<BiForecastsRuleState, BiForecastsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsRuleState, to: BiForecastsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsRuleState, to: BiForecastsRuleState): BiForecastsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsRule: " + from + " -> " + to);
    }
    return to;
  }
}
