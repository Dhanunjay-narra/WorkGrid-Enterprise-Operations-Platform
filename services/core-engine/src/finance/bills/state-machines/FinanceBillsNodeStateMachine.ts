export type FinanceBillsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsNodeStateMachine {
  private allowedTransitions: Record<FinanceBillsNodeState, FinanceBillsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsNodeState, to: FinanceBillsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsNodeState, to: FinanceBillsNodeState): FinanceBillsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsNode: " + from + " -> " + to);
    }
    return to;
  }
}
