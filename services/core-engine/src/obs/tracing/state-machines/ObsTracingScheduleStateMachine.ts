export type ObsTracingScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingScheduleStateMachine {
  private allowedTransitions: Record<ObsTracingScheduleState, ObsTracingScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingScheduleState, to: ObsTracingScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingScheduleState, to: ObsTracingScheduleState): ObsTracingScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
