export type SupportQueuesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesScheduleStateMachine {
  private allowedTransitions: Record<SupportQueuesScheduleState, SupportQueuesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesScheduleState, to: SupportQueuesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesScheduleState, to: SupportQueuesScheduleState): SupportQueuesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
