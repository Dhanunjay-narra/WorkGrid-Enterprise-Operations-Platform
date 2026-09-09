export type DmsOcrRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrRuleStateMachine {
  private allowedTransitions: Record<DmsOcrRuleState, DmsOcrRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrRuleState, to: DmsOcrRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrRuleState, to: DmsOcrRuleState): DmsOcrRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrRule: " + from + " -> " + to);
    }
    return to;
  }
}
