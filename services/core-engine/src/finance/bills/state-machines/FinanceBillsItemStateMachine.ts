export type FinanceBillsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsItemStateMachine {
  private allowedTransitions: Record<FinanceBillsItemState, FinanceBillsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsItemState, to: FinanceBillsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsItemState, to: FinanceBillsItemState): FinanceBillsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsItem: " + from + " -> " + to);
    }
    return to;
  }
}
