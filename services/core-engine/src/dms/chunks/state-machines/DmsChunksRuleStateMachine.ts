export type DmsChunksRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksRuleStateMachine {
  private allowedTransitions: Record<DmsChunksRuleState, DmsChunksRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksRuleState, to: DmsChunksRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksRuleState, to: DmsChunksRuleState): DmsChunksRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksRule: " + from + " -> " + to);
    }
    return to;
  }
}
