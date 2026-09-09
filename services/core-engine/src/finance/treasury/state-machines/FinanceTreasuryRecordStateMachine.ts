export type FinanceTreasuryRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasuryRecordStateMachine {
  private allowedTransitions: Record<FinanceTreasuryRecordState, FinanceTreasuryRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasuryRecordState, to: FinanceTreasuryRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasuryRecordState, to: FinanceTreasuryRecordState): FinanceTreasuryRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasuryRecord: " + from + " -> " + to);
    }
    return to;
  }
}
