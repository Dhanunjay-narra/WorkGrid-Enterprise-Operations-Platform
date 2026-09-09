export type FinanceBillsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsBatchStateMachine {
  private allowedTransitions: Record<FinanceBillsBatchState, FinanceBillsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsBatchState, to: FinanceBillsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsBatchState, to: FinanceBillsBatchState): FinanceBillsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
