export type IdentityScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityScheduleStateMachine {
  private allowedTransitions: Record<IdentityScheduleState, IdentityScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityScheduleState, to: IdentityScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityScheduleState, to: IdentityScheduleState): IdentityScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentitySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
