export type ObsLoggingRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingRuleStateMachine {
  private allowedTransitions: Record<ObsLoggingRuleState, ObsLoggingRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingRuleState, to: ObsLoggingRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingRuleState, to: ObsLoggingRuleState): ObsLoggingRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingRule: " + from + " -> " + to);
    }
    return to;
  }
}
