export type FinanceTaxesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesScheduleStateMachine {
  private allowedTransitions: Record<FinanceTaxesScheduleState, FinanceTaxesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesScheduleState, to: FinanceTaxesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesScheduleState, to: FinanceTaxesScheduleState): FinanceTaxesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
