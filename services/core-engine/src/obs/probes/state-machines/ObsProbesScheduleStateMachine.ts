export type ObsProbesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesScheduleStateMachine {
  private allowedTransitions: Record<ObsProbesScheduleState, ObsProbesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesScheduleState, to: ObsProbesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesScheduleState, to: ObsProbesScheduleState): ObsProbesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
