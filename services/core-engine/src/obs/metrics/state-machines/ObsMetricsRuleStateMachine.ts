export type ObsMetricsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsRuleStateMachine {
  private allowedTransitions: Record<ObsMetricsRuleState, ObsMetricsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsRuleState, to: ObsMetricsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsRuleState, to: ObsMetricsRuleState): ObsMetricsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsRule: " + from + " -> " + to);
    }
    return to;
  }
}
