export type FinanceBillsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsTaskStateMachine {
  private allowedTransitions: Record<FinanceBillsTaskState, FinanceBillsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsTaskState, to: FinanceBillsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsTaskState, to: FinanceBillsTaskState): FinanceBillsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsTask: " + from + " -> " + to);
    }
    return to;
  }
}
