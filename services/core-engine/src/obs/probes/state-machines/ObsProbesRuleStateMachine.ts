export type ObsProbesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesRuleStateMachine {
  private allowedTransitions: Record<ObsProbesRuleState, ObsProbesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesRuleState, to: ObsProbesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesRuleState, to: ObsProbesRuleState): ObsProbesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesRule: " + from + " -> " + to);
    }
    return to;
  }
}
