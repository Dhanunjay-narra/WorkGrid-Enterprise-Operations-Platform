export type AiPromptsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsScheduleStateMachine {
  private allowedTransitions: Record<AiPromptsScheduleState, AiPromptsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsScheduleState, to: AiPromptsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsScheduleState, to: AiPromptsScheduleState): AiPromptsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
