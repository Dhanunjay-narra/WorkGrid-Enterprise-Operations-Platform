export type AiAgentsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsScheduleStateMachine {
  private allowedTransitions: Record<AiAgentsScheduleState, AiAgentsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsScheduleState, to: AiAgentsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsScheduleState, to: AiAgentsScheduleState): AiAgentsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
