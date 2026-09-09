export type RbacScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacScheduleStateMachine {
  private allowedTransitions: Record<RbacScheduleState, RbacScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacScheduleState, to: RbacScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacScheduleState, to: RbacScheduleState): RbacScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
