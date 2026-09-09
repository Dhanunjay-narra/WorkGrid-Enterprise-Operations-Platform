export type BiAnomaliesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesRuleStateMachine {
  private allowedTransitions: Record<BiAnomaliesRuleState, BiAnomaliesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesRuleState, to: BiAnomaliesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesRuleState, to: BiAnomaliesRuleState): BiAnomaliesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesRule: " + from + " -> " + to);
    }
    return to;
  }
}
