export type FinanceLedgerMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerMappingStateMachine {
  private allowedTransitions: Record<FinanceLedgerMappingState, FinanceLedgerMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerMappingState, to: FinanceLedgerMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerMappingState, to: FinanceLedgerMappingState): FinanceLedgerMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerMapping: " + from + " -> " + to);
    }
    return to;
  }
}
