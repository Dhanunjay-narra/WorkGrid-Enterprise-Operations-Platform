export type BiCohortsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsScheduleStateMachine {
  private allowedTransitions: Record<BiCohortsScheduleState, BiCohortsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsScheduleState, to: BiCohortsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsScheduleState, to: BiCohortsScheduleState): BiCohortsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
