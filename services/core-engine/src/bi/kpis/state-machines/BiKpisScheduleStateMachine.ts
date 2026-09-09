export type BiKpisScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisScheduleStateMachine {
  private allowedTransitions: Record<BiKpisScheduleState, BiKpisScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisScheduleState, to: BiKpisScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisScheduleState, to: BiKpisScheduleState): BiKpisScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
