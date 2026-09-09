export type ObsAlertsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsRuleStateMachine {
  private allowedTransitions: Record<ObsAlertsRuleState, ObsAlertsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsRuleState, to: ObsAlertsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsRuleState, to: ObsAlertsRuleState): ObsAlertsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsRule: " + from + " -> " + to);
    }
    return to;
  }
}
