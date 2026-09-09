export type BiDashboardsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsRuleStateMachine {
  private allowedTransitions: Record<BiDashboardsRuleState, BiDashboardsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsRuleState, to: BiDashboardsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsRuleState, to: BiDashboardsRuleState): BiDashboardsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsRule: " + from + " -> " + to);
    }
    return to;
  }
}
