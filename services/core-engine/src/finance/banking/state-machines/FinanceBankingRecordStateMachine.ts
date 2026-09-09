export type FinanceBankingRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingRecordStateMachine {
  private allowedTransitions: Record<FinanceBankingRecordState, FinanceBankingRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingRecordState, to: FinanceBankingRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingRecordState, to: FinanceBankingRecordState): FinanceBankingRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingRecord: " + from + " -> " + to);
    }
    return to;
  }
}
