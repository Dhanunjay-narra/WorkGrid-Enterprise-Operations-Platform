export type FinanceBankingScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingScheduleStateMachine {
  private allowedTransitions: Record<FinanceBankingScheduleState, FinanceBankingScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingScheduleState, to: FinanceBankingScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingScheduleState, to: FinanceBankingScheduleState): FinanceBankingScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
