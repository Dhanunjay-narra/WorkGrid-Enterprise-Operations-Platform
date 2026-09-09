export type ObsSpansRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansRuleStateMachine {
  private allowedTransitions: Record<ObsSpansRuleState, ObsSpansRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansRuleState, to: ObsSpansRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansRuleState, to: ObsSpansRuleState): ObsSpansRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansRule: " + from + " -> " + to);
    }
    return to;
  }
}
