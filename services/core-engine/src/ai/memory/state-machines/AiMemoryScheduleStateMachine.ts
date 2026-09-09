export type AiMemoryScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryScheduleStateMachine {
  private allowedTransitions: Record<AiMemoryScheduleState, AiMemoryScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryScheduleState, to: AiMemoryScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryScheduleState, to: AiMemoryScheduleState): AiMemoryScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemorySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
