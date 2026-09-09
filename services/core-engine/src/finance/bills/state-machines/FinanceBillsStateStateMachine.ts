export type FinanceBillsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsStateStateMachine {
  private allowedTransitions: Record<FinanceBillsStateState, FinanceBillsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsStateState, to: FinanceBillsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsStateState, to: FinanceBillsStateState): FinanceBillsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsState: " + from + " -> " + to);
    }
    return to;
  }
}
