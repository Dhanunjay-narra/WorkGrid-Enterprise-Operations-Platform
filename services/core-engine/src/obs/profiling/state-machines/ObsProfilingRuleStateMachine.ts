export type ObsProfilingRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingRuleStateMachine {
  private allowedTransitions: Record<ObsProfilingRuleState, ObsProfilingRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingRuleState, to: ObsProfilingRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingRuleState, to: ObsProfilingRuleState): ObsProfilingRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingRule: " + from + " -> " + to);
    }
    return to;
  }
}
