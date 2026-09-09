export type BiAnomaliesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesScheduleStateMachine {
  private allowedTransitions: Record<BiAnomaliesScheduleState, BiAnomaliesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesScheduleState, to: BiAnomaliesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesScheduleState, to: BiAnomaliesScheduleState): BiAnomaliesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
