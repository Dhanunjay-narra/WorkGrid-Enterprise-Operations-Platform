export type BiQueriesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesScheduleStateMachine {
  private allowedTransitions: Record<BiQueriesScheduleState, BiQueriesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesScheduleState, to: BiQueriesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesScheduleState, to: BiQueriesScheduleState): BiQueriesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
