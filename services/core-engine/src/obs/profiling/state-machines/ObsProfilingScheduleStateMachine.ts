export type ObsProfilingScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingScheduleStateMachine {
  private allowedTransitions: Record<ObsProfilingScheduleState, ObsProfilingScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingScheduleState, to: ObsProfilingScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingScheduleState, to: ObsProfilingScheduleState): ObsProfilingScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
