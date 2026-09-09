export type DmsVersionsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsRuleStateMachine {
  private allowedTransitions: Record<DmsVersionsRuleState, DmsVersionsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsRuleState, to: DmsVersionsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsRuleState, to: DmsVersionsRuleState): DmsVersionsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsRule: " + from + " -> " + to);
    }
    return to;
  }
}
