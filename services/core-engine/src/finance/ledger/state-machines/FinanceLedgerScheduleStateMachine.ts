export type FinanceLedgerScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerScheduleStateMachine {
  private allowedTransitions: Record<FinanceLedgerScheduleState, FinanceLedgerScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerScheduleState, to: FinanceLedgerScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerScheduleState, to: FinanceLedgerScheduleState): FinanceLedgerScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
