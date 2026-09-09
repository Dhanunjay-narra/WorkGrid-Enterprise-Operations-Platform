export type FinanceTaxesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesBatchStateMachine {
  private allowedTransitions: Record<FinanceTaxesBatchState, FinanceTaxesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesBatchState, to: FinanceTaxesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesBatchState, to: FinanceTaxesBatchState): FinanceTaxesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
