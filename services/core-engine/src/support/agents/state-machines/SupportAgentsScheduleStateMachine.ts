export type SupportAgentsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsScheduleStateMachine {
  private allowedTransitions: Record<SupportAgentsScheduleState, SupportAgentsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsScheduleState, to: SupportAgentsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsScheduleState, to: SupportAgentsScheduleState): SupportAgentsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
