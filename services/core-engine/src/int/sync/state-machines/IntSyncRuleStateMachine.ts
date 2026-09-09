export type IntSyncRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncRuleStateMachine {
  private allowedTransitions: Record<IntSyncRuleState, IntSyncRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncRuleState, to: IntSyncRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncRuleState, to: IntSyncRuleState): IntSyncRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncRule: " + from + " -> " + to);
    }
    return to;
  }
}
