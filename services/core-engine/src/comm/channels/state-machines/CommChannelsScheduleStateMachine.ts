export type CommChannelsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsScheduleStateMachine {
  private allowedTransitions: Record<CommChannelsScheduleState, CommChannelsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsScheduleState, to: CommChannelsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsScheduleState, to: CommChannelsScheduleState): CommChannelsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
