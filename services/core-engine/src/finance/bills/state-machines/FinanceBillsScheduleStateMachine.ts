export type FinanceBillsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsScheduleStateMachine {
  private allowedTransitions: Record<FinanceBillsScheduleState, FinanceBillsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsScheduleState, to: FinanceBillsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsScheduleState, to: FinanceBillsScheduleState): FinanceBillsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
