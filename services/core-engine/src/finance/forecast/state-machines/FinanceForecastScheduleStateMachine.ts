export type FinanceForecastScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastScheduleStateMachine {
  private allowedTransitions: Record<FinanceForecastScheduleState, FinanceForecastScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastScheduleState, to: FinanceForecastScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastScheduleState, to: FinanceForecastScheduleState): FinanceForecastScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
