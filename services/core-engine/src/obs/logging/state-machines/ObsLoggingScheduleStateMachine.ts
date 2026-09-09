export type ObsLoggingScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingScheduleStateMachine {
  private allowedTransitions: Record<ObsLoggingScheduleState, ObsLoggingScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingScheduleState, to: ObsLoggingScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingScheduleState, to: ObsLoggingScheduleState): ObsLoggingScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
