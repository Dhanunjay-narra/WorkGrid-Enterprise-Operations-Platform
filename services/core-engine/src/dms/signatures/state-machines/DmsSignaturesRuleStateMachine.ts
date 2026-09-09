export type DmsSignaturesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesRuleStateMachine {
  private allowedTransitions: Record<DmsSignaturesRuleState, DmsSignaturesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesRuleState, to: DmsSignaturesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesRuleState, to: DmsSignaturesRuleState): DmsSignaturesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesRule: " + from + " -> " + to);
    }
    return to;
  }
}
