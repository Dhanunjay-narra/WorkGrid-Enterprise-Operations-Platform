export type ObsDashboardsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsRuleStateMachine {
  private allowedTransitions: Record<ObsDashboardsRuleState, ObsDashboardsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsRuleState, to: ObsDashboardsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsRuleState, to: ObsDashboardsRuleState): ObsDashboardsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsRule: " + from + " -> " + to);
    }
    return to;
  }
}
