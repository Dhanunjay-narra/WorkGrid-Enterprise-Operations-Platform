export type ObsTracingRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingRuleStateMachine {
  private allowedTransitions: Record<ObsTracingRuleState, ObsTracingRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingRuleState, to: ObsTracingRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingRuleState, to: ObsTracingRuleState): ObsTracingRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingRule: " + from + " -> " + to);
    }
    return to;
  }
}
