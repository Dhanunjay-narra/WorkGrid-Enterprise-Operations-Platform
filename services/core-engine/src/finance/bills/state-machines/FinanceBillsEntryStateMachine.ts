export type FinanceBillsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsEntryStateMachine {
  private allowedTransitions: Record<FinanceBillsEntryState, FinanceBillsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsEntryState, to: FinanceBillsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsEntryState, to: FinanceBillsEntryState): FinanceBillsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
