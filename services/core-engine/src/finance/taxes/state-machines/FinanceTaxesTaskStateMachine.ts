export type FinanceTaxesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesTaskStateMachine {
  private allowedTransitions: Record<FinanceTaxesTaskState, FinanceTaxesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesTaskState, to: FinanceTaxesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesTaskState, to: FinanceTaxesTaskState): FinanceTaxesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesTask: " + from + " -> " + to);
    }
    return to;
  }
}
