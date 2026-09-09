export type AiToolsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsScheduleStateMachine {
  private allowedTransitions: Record<AiToolsScheduleState, AiToolsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsScheduleState, to: AiToolsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsScheduleState, to: AiToolsScheduleState): AiToolsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
