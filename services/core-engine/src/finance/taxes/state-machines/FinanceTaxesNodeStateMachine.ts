export type FinanceTaxesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesNodeStateMachine {
  private allowedTransitions: Record<FinanceTaxesNodeState, FinanceTaxesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesNodeState, to: FinanceTaxesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesNodeState, to: FinanceTaxesNodeState): FinanceTaxesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesNode: " + from + " -> " + to);
    }
    return to;
  }
}
